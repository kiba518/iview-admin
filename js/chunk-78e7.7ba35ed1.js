(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78e7"],{"0716":function(t,a,e){},2709:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Row",{attrs:{gutter:10}},[e("i-col",{attrs:{span:"6"}},[e("Card",[e("Upload",{attrs:{action:"","before-upload":t.beforeUpload}},[e("Button",{attrs:{icon:"ios-cloud-upload-outline"}},[t._v("上传Csv文件")]),t._v("\n            点击上传Csv文件\n      ")],1),e("p",[t._v("util.js提供两个方法用来实现这个功能：")]),e("p",{staticClass:"update-table-intro"},[e("Icon",{staticStyle:{"margin-right":"10px"},attrs:{size:10,type:"md-heart"}}),e("span",{staticClass:"code-high-line"},[t._v("getArrayFromFile")]),t._v("：将Csv文件解析为二维数组")],1),e("p",{staticClass:"update-table-intro"},[e("Icon",{staticStyle:{"margin-right":"10px"},attrs:{size:10,type:"md-heart"}}),e("span",{staticClass:"code-high-line"},[t._v("getTableDataFromArray")]),t._v("：将二维数组转为表格数据，具体请看文档")],1)],1)],1),e("i-col",{attrs:{span:"18"}},[e("Table",{attrs:{height:500,columns:t.columns,data:t.tableData}})],1)],1)},s=[],o=e("c276"),i={name:"update_table_page",data:function(){return{columns:[],tableData:[]}},methods:{beforeUpload:function(t){var a=this;return Object(o["d"])(t).then(function(t){var e=Object(o["l"])(t),n=e.columns,s=e.tableData;a.columns=n,a.tableData=s}).catch(function(){a.$Notice.warning({title:"只能上传Csv文件",desc:"只能上传Csv文件，请重新上传"})}),!1}}},l=i,r=(e("7af4"),e("2877")),c=Object(r["a"])(l,n,s,!1,null,null,null);c.options.__file="update-table.vue";a["default"]=c.exports},"7af4":function(t,a,e){"use strict";var n=e("0716"),s=e.n(n);s.a}}]);