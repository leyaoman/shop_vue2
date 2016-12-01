<template>
  <div id="app">
      <router-view keep-alive></router-view>
      <div class="tab-bar">
        <ul class="menu">
            <template v-for="(item,index) in itemlist" >
            <li v-bind:data-index="index" v-bind:data-url="item.url" v-on:click="tapItem">
                <span v-bind:class="['span-icon-box',item.className]"></span>
                <span v-text="item.name" v-bind:class="item.select ? 'font-pink':''"></span>
            </li>
          </template>
        </ul>
      </div>
  </div>
</template>

<script>
import { mapGetters,mapActions} from 'vuex'

export default {
  computed: mapGetters({
    itemlist: 'getFooterButton'
  }),
  methods:{
      tapItem:function(e){
        var itemIndex = e.currentTarget.getAttribute("data-index");
        var itemUrl = e.currentTarget.getAttribute("data-url");
        /*var itemdata = this.itemlist[itemindex];
        if(itemdata.select){
           return;
        }
        for(let i in this.itemlist){
           if(itemindex == i){
              itemdata.className += "-c";
              itemdata.fontColor = "font-green";
              itemdata.select = true;
           }else{
             if(this.itemlist[i].select){
                this.itemlist[i].className = this.itemlist[i].className.replace(/-c$/,'');
                this.itemlist[i].fontColor = "";
                this.itemlist[i].select = false;
             }
           }
        }*/
        this.$router.push({ path: itemUrl });
    }
  },
  ready(){
        console.log('ready进入APP' + new Date().getTime());
        //vue-resource 模块来异步加载数据
        //console.log(this.$http);
        this.$http.get('./src/test.json', {}, {
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            },
            emulateJSON: true
        }).then(function(response) {
            var data = response.data;
            this.msg = data;
        }, function(response) {
            //console.log(response);
        });
  },
  created(){
    console.log('created进入APP'  + new Date().getTime());
  }
}
</script>

<style>
/*--base.css--*/
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td,img { margin:0; padding:0; }
h1, h2, h3, h4, h5, h6{ font-size:100%; }
address, cite, dfn, em, var { font-style:normal; }
code, kbd, pre, samp { font-family:couriernew, courier, monospace; }
small{ font-size:12px; }
ul, ol { list-style:none; }
a { text-decoration:none; }
a:hover { text-decoration:underline; }
sup { vertical-align:text-top; }
sub{ vertical-align:text-bottom; }
legend { color:#000; }
fieldset, img { border:0; }
button, input, select, textarea { font-size:100%; }
table { border-collapse:collapse; border-spacing:0; }


/*公共部分*/
html {
  height: 100%;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
  height: 100%;
  font-family: Helvetica, Arial, 'PingFang SC', 'Microsoft YaHei', 'WenQuanYi Micro Hei', 'tohoma,sans-serif';

}
/*body {*/
  /*background-color:#f7f2f2;*/
  /*color: #2c3e50;*/
  /*width:100%;*/
  /*height:100%;*/
  /*min-width: 300px;*/
/*}*/

/*tab栏*/
#app{
width:100%;
height:100%;
}

.menu{
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background-color:white;
}

.menu{
  padding:5px 10px 5px 10px;
  border-top:1px solid #ececec;
  display:flex;/*flex布局*/
  flex-direction:row;/*横向排列*/
  flex-wrap:nowrap;/*不换行*/
  justify-content:space-between;/*设置对齐方式为两端对齐*/
}
.font-pink{
  color:#f91c4c;
}
.menu li{
  display:inline-block;
  list-style-type:none;
}

.menu li span{
  display:block;
  text-align:center;
}

.span-icon-box{
 width:48px;
 height:48px;
 margin:0 auto;
}

.icon-house{
  background:url(../static/imgs/home/icon@2x/icon_home_n@2x.png) no-repeat center ;

}
.icon-house-t{
    background:url(../static/imgs/home/icon@2x/icon_home_p@2x_49.png) no-repeat center ;

}

.icon-sort{
  background:url(../static/imgs/home/icon@2x/icon_classification_n@2x.png) no-repeat center;
}
.icon-sort-t{
    background:url(../static/imgs/home/icon@2x/icon_classification_p@2x.png) no-repeat center;
}

.icon-car{
    background:url(../static/imgs/home/icon@2x/icon_shopping-cart_n@2x.png) no-repeat center;
}
.icon-car-t{
    background:url(../static/imgs/home/icon@2x/icon_shopping-cart_p@2x.png) no-repeat center;
}

.icon-user{
  background:url(../static/imgs/home/icon@2x/icon_mine_n@2x.png) no-repeat center;
}
.icon-user-t{
    background:url(../static/imgs/home/icon@2x/icon_mine_p@2x.png) no-repeat center;
}


</style>
