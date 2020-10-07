import {Banner,Frame,Toast,Card,DisplayText,Form,FormLayout,Layout,Page,PageActions,TextField} from '@shopify/polaris';
import store from 'store-js';
import gql from 'graphql-tag';
import {Mutation} from 'react-apollo';

const UPDATE_PRICE= gql`
mutation productVariantUpdate($input:ProductVariantInput!){
    productVariantUpdate(input:$input){
        product{
            title

        }
        productVariant{
            id
            price
        }
    }
}

`;

class EditProduct extends React.Component{
    state={
        discount:'',
        price:'',
        variantId:'',
        showTost:false
    };
    componentDidMount(){
        this.setState({discount:this.itemToBeConsumed()});
    }
    render() {
        const {name,price,discount,variantId} = this.state;
        return(
            <Mutation
            mutation={UPDATE_PRICE}
            >
                {(handleSubmit,{error,data})=>{
                    const showError = error&&(
                    <Banner status="critical">{error.message}</Banner>

                    );
                    const showTost = data && data.productVaraintUpdate && (
                        <Toast
                        content="Successful"
                        onDismiss={()=>this.setState({showError:false})}
                        >

                        </Toast>
                    );
                    return(
                        <Frame>
                        <Page>
                        <Layout>
                            {showTost}
                            <Layout.Section>
                                {showError}
                            </Layout.Section>
                            <Layout.Section>

                <DisplayText size="large">{name}</DisplayText>
                <Form>
                    <Card sectioned>
                        <FormLayout>
                            <FormLayout.Group>
                               <TextField
                               prefix="$"
                               value={discount}
                               onChange={this.handleChange('discount')}
                               label="Discounted Price"
                               type="discount"/>
                            </FormLayout.Group>
                            <p>
                                The sale will expire in 2 weeks
                            </p>
        
                        </FormLayout>
                    </Card>
                    <PageActions
                    primaryAction={[
                        {
                            content:'Save',
                            onAction:()=>{
                                const productVariableInput={
                                    id:variantId,
                                    price:discount
                                };
                            handleSubmit({
                                variables:{input:productVariableInput},
                            });    
                            }
                                            }
                    ]}
                    secondaryActions={[
                        {
                            content:'Remove discount'
                        }
                    ]}
        
                />
                </Form>
                            </Layout.Section>
                        </Layout>
                    </Page>
                    </Frame>
                    );
                }}
            </Mutation>

        );
    }
    handleChange = (field) =>{
        return (value) => this.setState({[field]:value});

    }
    itemToBeConsumed = () =>{
        const item = store.get('item');
        const price = item.variants.edges[0].node.price;
        const variantId = item.variants.edges[0].node.id;
        const discounter = price * 0.1;
        this.setState({price, variantId});
        return (price-discounter).toFixed(2);
    }
}

export default EditProduct;