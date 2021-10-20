import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Product } from "../product";
import * as AppState from '../../state/app.state';

export interface State extends AppState.State{
    products: ProductState;

}

export interface ProductState{
    showProductCode:boolean;
    currentProduct:Product;
    products:Product[];
}

const initialState:ProductState={
    showProductCode:true,
    currentProduct:null,
    products:[]

}

const getProductFeatureState = createFeatureSelector<ProductState>('products');

//for show prod
export const getShowProductCode = createSelector(
    getProductFeatureState,
    state =>  state.showProductCode
);

//for  current 

export const getCurrentState = createSelector(
    getProductFeatureState,
    state => state.currentProduct
);

export const getProductState = createSelector(
    getProductFeatureState,
    state => state.products
);


export const productReducer = createReducer<ProductState>(
   initialState,
   on(createAction('[Product] Toggle Product Code'), (state):ProductState => {
       console.log("original sstate: "+JSON.stringify(state));
       return{
           ...state,
           showProductCode: !state.showProductCode
       };
   })


)