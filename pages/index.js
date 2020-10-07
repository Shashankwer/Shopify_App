import {EmptyState,Layout,Page,TextStyle} from '@shopify/polaris';
import { TitleBar,ResourcePicker } from '@shopify/app-bridge';


const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';
class Index extends React.Component {
state = {open:false};
render() {
  return (  
  <Page>
      <TitleBar
      title="Sample App"
      primaryAction={{content:'Select products'}}
      />
      <ResourcePicker
        resourceType="Product"
        showVariants={false}
        open={this.state.open}
        onSelection={(resource)=>this.handleSelection(resource)}
        onCancel={()=>this.setState({open:false})}
        />

      <Layout>
          <EmptyState
          heading="Select products to start"
          action={{
              content:'Select products',
              onAction:()=>this.setState({open:true}),
          }}
          image={img}
          >
              <p>Select products and change their price temporarily</p>
          </EmptyState>
      </Layout>
  </Page>
);
}
handleSelection = (resources) =>{
    this.setState({open:false})
    console.log(resources)
};
}

export default Index;