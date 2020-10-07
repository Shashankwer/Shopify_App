import {EmptyState,Layout,Page,TextStyle} from '@shopify/polaris';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
import store from 'store-js';
import ResourceListWithProducts from '../components/ResourceList';
const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';
class Index extends React.Component {
state = {open:false};
render() {
   const emptyState = !store.get('ids'); 
  return (  
  <Page>
      <TitleBar
      title="Sample App"
      primaryAction={{content:'Select products',
                       onAction:()=> this.setState({open:true}),
                     }}
      
      />
      <ResourcePicker
        resourceType="Product"
        showVariants={false}
        open={this.state.open}
        onSelection={(resource)=>this.handleSelection(resource)}
        onCancel={()=>this.setState({open:false})}
        />
{emptyState?(<Layout>
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
      </Layout>):(      <ResourceListWithProducts/>)}
      

  </Page>
);
}
//Passing data from the resource picker. 
/*
At the point you should see the modal open and close with 
your store's products displayed. If we select a product and click Select, then each product should be found in the console.log

One will want to take those products and display the to merchants in a form, Eventially one will write a query to the Shopify GrapQL Admin API, 
*/
handleSelection = (resources) =>{
    const idsFromResources = resources.selection.map((product)=>product.id);
    this.setState({open:false})
    //console.log(idsFromResources)
    store.set('ids',idsFromResources);
};
}

export default Index;