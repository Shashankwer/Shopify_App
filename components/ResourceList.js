import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {Card,ResourceList,TextStyle,Stack,Thumbnail} from '@shopify/polaris';
import store from 'store-js';
import {Redirect} from '@shopify/app-bridge/actions';
import {Context} from '@shopify/app-bridge-react';


const GET_PRODUCTS_BY_ID = gql`
  query getProducts($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Product {
        title
        handle
        descriptionHtml
        id
        images(first: 1) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
        variants(first: 1) {
          edges {
            node {
              price
              id
            }
          }
        }
      }
    }
  }
`;


class ResourceListWithProducts extends React.Component{
    static contextType = Context;
    render(){
        const twoweeksfromNow=new Date(Date.now()+12096e5).toDateString();
        const app = this.context;
        const redirectToProduct = ()=>{
            const redirect = Redirect.create(app);            
                redirect.dispatch(
                    Redirect.Action.APP,
                    '/edit-product'
                );
            };
        return (
            <Query query={GET_PRODUCTS_BY_ID} variables={{ids:store.get('ids')}}>
                {({data,loading,error})=>{
                    if (loading) return <div>Loading ...</div>
                    if (error) return <div>{error.message}</div>
                    console.log(data);
                    return(
                        <Card>
                            <ResourceList
                            showHeader
                            resourceName={{singular:'Product',plural:'Products'}}
                            items={data.nodes}
                            renderItem={item=>{
                                const media=(
                                    <Thumbnail
                                    source={
                                        item.images.edges[0]?item.images.edges[0].originalSrc:''
                                    }
                                    alt={
                                        item.images.edges[0]?item.images.edges[0].altText:''
                                    }
                                    />

                                );
                            const price = item.variants.edges[0].node.price;
                            return(
                                <ResourceList.Item
                                id={item.id}
                                media = {media}
                                accessibilityLabel={`View details for ${item.title}`}
                                onClick={()=>{
                                    store.set('item',item);
                                    redirectToProduct();
                                }}
                                >
                                <Stack>
                                    <Stack.Item fill>
                                        <h3>
                                            <TextStyle variation="strong">
                                                {item.title}
                                            </TextStyle>
                                            
                                        </h3>
                                    </Stack.Item>
                                    <Stack.Item>
                            <p>Expires on {twoweeksfromNow}</p>
                                    </Stack.Item>
                                </Stack> 
                                    

                                </ResourceList.Item>
                            );
                            }}
                            />

                            
                        </Card>
                    );
                }}
            </Query>
        );
    }


}

export default ResourceListWithProducts;


/*
Making use of localstorgae for persisting data. 
One can make use of store.js a corss browser JavaScript library for managing localStorage
This works well for testing the development app. If we were building app in production the app would require the data to be stored in databases. 

Polaris Empty state compoment is the first thing that the merchant will see on the main page of the application. 

After Selecting the first product the page can list the that one just built and add logic to tell the index file when to show the empty state and when to show resourc empty state and when to show the resource list. 



*/
