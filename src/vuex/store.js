import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
console.log(Vuex);
/*Vuex也是一个对象，自带方法：
Store、mapGetters、




*/
const state = {
	user:{},
	city:{},
	productdetail:{},
	footerButtonList:{},
	tabState:{}
};

const mutations = {
	UPDATEUSER(state,param){
		state.user = param;
	},
	UPDATECITY(state,param){
		state.city = param;
	},
	UPDATEPRODUCT(state,param){
		state.productdetail = param;
	},
	UPDATEFOOTERBUTTON(state,param){
		state.footerButtonList = param;
	},
	UPDATETABSTATE(state,param){
		state.tabState = param;
	}
}

const getters = {
	getUser:state => {return state.user},
	getCity:state => {return state.city},
	getProduct:state => {return state.productdetail},
	getState:state => {return state.tabState},
	getFooterButton:state => {return state.footerButtonList}
}
/*把vuex对象输出*/
export default  new Vuex.Store({state,getters,mutations});


