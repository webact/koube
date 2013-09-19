/*!@license
 * Infragistics.Web.ClientUI Grid Paging 13.1.20131.1012
 *
 * Copyright (c) 2011-2013 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 * Depends on:
 *	jquery-1.4.4.js
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	infragistics.ui.grid.framework.js
 *	infragistics.ui.editors.js
 *	infragistics.ui.shared.js
 *	infragistics.dataSource.js
 *	infragistics.util.js
 */
if(typeof jQuery!=="function"){throw new Error("jQuery is undefined")}(function($){$.widget("ui.igGridPaging",{css:{pagerClass:"ui-widget ui-iggrid-pager ui-helper-clearfix ui-corner-bottom ui-widget-header ui-iggrid-footer",pageLink:"ui-iggrid-pagelink ui-helper-reset",page:"ui-iggrid-page ui-state-default ui-corner-all",pageHover:"ui-iggrid-page-hover ui-state-hover",pageList:"ui-helper-reset ui-iggrid-pagelist ui-iggrid-paging-item",pageLinkCurrent:"ui-iggrid-pagelinkcurrent",pageCurrent:"ui-iggrid-pagecurrent ui-state-active ui-corner-all",pageFocused:"ui-iggrid-pagefocused ui-state-focus",nextPage:"ui-iggrid-nextpage ui-iggrid-paging-item ui-state-default",prevPage:"ui-iggrid-prevpage ui-iggrid-paging-item ui-state-default",firstPage:"ui-iggrid-firstpage ui-iggrid-paging-item ui-state-default ui-corner-left",lastPage:"ui-iggrid-lastpage ui-iggrid-paging-item ui-state-default ui-corner-right",nextPageLabel:"ui-iggrid-nextpagelabel",prevPageLabel:"ui-iggrid-prevpagelabel",firstPageLabel:"ui-iggrid-firstpagelabel",lastPageLabel:"ui-iggrid-lastpagelabel",nextPageLabelDisabled:"ui-iggrid-nextpagelabeldisabled ui-state-disabled",prevPageLabelDisabled:"ui-iggrid-prevpagelabeldisabled ui-state-disabled",firstPageLabelDisabled:"ui-iggrid-firstpagelabeldisabled ui-state-disabled",lastPageLabelDisabled:"ui-iggrid-lastpagelabeldisabled ui-state-disabled",nextPageImage:"ui-iggrid-pageimg ui-iggrid-nextpageimg ui-icon ui-icon-triangle-1-e",prevPageImage:"ui-iggrid-pageimg ui-iggrid-prevpageimg ui-icon ui-icon-triangle-1-w",firstPageImage:"ui-iggrid-pageimg ui-iggrid-firstpageimg ui-icon ui-icon-arrowstop-1-w",lastPageImage:"ui-iggrid-pageimg ui-iggrid-lastpageimg ui-icon ui-icon-arrowstop-1-e",nextPageImageDisabled:"ui-iggrid-pageimg ui-iggrid-nextpageimgdisabled ui-icon ui-state-disabled ui-icon-triangle-1-e",prevPageImageDisabled:"ui-iggrid-pageimg ui-iggrid-prevpageimgdisabled ui-icon ui-state-disabled ui-icon-triangle-1-w",firstPageImageDisabled:"ui-iggrid-pageimg ui-iggrid-firstpageimgdisabled ui-icon ui-state-disabled ui-icon-arrowstop-1-w",lastPageImageDisabled:"ui-iggrid-pageimg ui-iggrid-lastpageimgdisabled ui-icon ui-state-disabled ui-icon-arrowstop-1-e",pagerRecordsLabel:"ui-iggrid-pagerrecordslabel ui-iggrid-results",pageSizeLabel:"ui-iggrid-pagesizelabel",pageSizeDropDown:"ui-iggrid-pagesizedropdown",pageSizeDropDownContainer:"ui-helper-clearfix ui-iggrid-pagesizedropdowncontainer",pageSizeDropDownContainerAbove:"ui-widget ui-helper-clearfix ui-iggrid-pagesizedropdowncontainerabove ui-iggrid-toolbar ui-widget-header and ui-corner-top",pageDropDownContainer:"ui-iggrid-pagedropdowncontainer",pageDropDownLabels:"ui-iggrid-pagedropdownlabels",pageDropDown:"ui-iggrid-pagedropdown",pagerRightAreaContainer:"ui-iggrid-paging",pagingResults:"ui-iggrid-results"},options:{pageSize:25,recordCountKey:null,pageSizeUrlKey:null,pageIndexUrlKey:null,currentPageIndex:0,type:null,showPageSizeDropDown:true,pageSizeDropDownLabel:$.ig.GridPaging.locale.pageSizeDropDownLabel,pageSizeDropDownTrailingLabel:$.ig.GridPaging.locale.pageSizeDropDownTrailingLabel,pageSizeDropDownLocation:"above",showPagerRecordsLabel:true,pagerRecordsLabelTemplate:$.ig.GridPaging.locale.pagerRecordsLabelTemplate,nextPageLabelText:$.ig.GridPaging.locale.nextPageLabelText,prevPageLabelText:$.ig.GridPaging.locale.prevPageLabelText,firstPageLabelText:$.ig.GridPaging.locale.firstPageLabelText,lastPageLabelText:$.ig.GridPaging.locale.lastPageLabelText,showFirstLastPages:true,showPrevNextPages:true,currentPageDropDownLeadingLabel:$.ig.GridPaging.locale.currentPageDropDownLeadingLabel,currentPageDropDownTrailingLabel:$.ig.GridPaging.locale.currentPageDropDownTrailingLabel,currentPageDropDownTooltip:$.ig.GridPaging.locale.currentPageDropDownTooltip,pageSizeDropDownTooltip:$.ig.GridPaging.locale.pageSizeDropDownTooltip,pagerRecordsLabelTooltip:$.ig.GridPaging.locale.pagerRecordsLabelTooltip,prevPageTooltip:$.ig.GridPaging.locale.prevPageTooltip,nextPageTooltip:$.ig.GridPaging.locale.nextPageTooltip,firstPageTooltip:$.ig.GridPaging.locale.firstPageTooltip,lastPageTooltip:$.ig.GridPaging.locale.lastPageTooltip,pageTooltipFormat:$.ig.GridPaging.locale.pageTooltipFormat,pageSizeList:[],pageCountLimit:10,visiblePageCount:5,defaultDropDownWidth:70},events:{pageIndexChanging:"pageIndexChanging",pageIndexChanged:"pageIndexChanged",pageSizeChanging:"pageSizeChanging",pageSizeChanged:"pageSizeChanged",pagerRendering:"pagerRendering",pagerRendered:"pagerRendered"},_loadingIndicator:null,_isPaging:false,_create:function(){},_setOption:function(key,value){var items,label,id,pager;id=this.grid.element[0].id;pager=$("#"+id+"_pager");$.Widget.prototype._setOption.apply(this,arguments);if(key==="type"||key==="showPageSizeDropDown"||key==="pageSizeDropDownLocation"||key==="showPagerRecordsLabel"||key==="visiblePageCount"){throw new Error($.ig.Grid.locale.optionChangeNotSupported+" "+key)}if(key==="pageSize"){this.pageSize(value)}else if(key==="currentPageIndex"){this.pageIndex(value)}else if(key==="showFirstLastPages"){if(value===true){pager.find(".ui-iggrid-firstpage").show();pager.find(".ui-iggrid-lastpage").show()}else{pager.find(".ui-iggrid-firstpage").hide();pager.find(".ui-iggrid-lastpage").hide()}}else if(key==="showPrevNextPages"){if(value===true){pager.find(".ui-iggrid-prevpage").show();pager.find(".ui-iggrid-nextpage").show()}else{pager.find(".ui-iggrid-prevpage").hide();pager.find(".ui-iggrid-nextpage").hide()}}else if(key==="pageSizeList"){if($.type(value)==="string"){items=value.split(",")}else{items=value}if(this._pageSizeDD){this._pageSizeDD.igEditor("option","listItems",items)}}else if(key==="nextPageLabelText"){label=pager.find(".ui-iggrid-nextpagelabel");label=label.length===0?pager.find(".ui-iggrid-nextpagelabeldisabled"):label;label.text(value)}else if(key==="prevPageLabelText"){label=pager.find(".ui-iggrid-prevpagelabel");label=label.length===0?pager.find(".ui-iggrid-prevpagelabeldisabled"):label;label.text(value)}else if(key==="firstPageLabelText"){label=pager.find(".ui-iggrid-firstpagelabel");label=label.length===0?pager.find(".ui-iggrid-firstpagelabeldisabled"):label;label.text(value)}else if(key==="lastPageLabelText"){label=pager.find(".ui-iggrid-lastpagelabel");label=label.length===0?pager.find(".ui-iggrid-nextpagelabeldisabled"):label;label.text(value)}},pageIndex:function(index){if(index!==null&&index!==undefined){this._overrideLabel=true;this.options.currentPageIndex=index}if(index!==undefined&&index!==null){this.grid.element.trigger("iggriduisoftdirty",{owner:this})}return this.grid.dataSource.pageIndex(index)},pageSize:function(size){var noCancel=true;if(size){this.grid.dataSource.settings.paging.pageIndex=0;this.options.currentPageIndex=0;noCancel=this.grid._trigger(this.grid.events.dataBinding,null,{owner:this.grid});if(noCancel){this._showLoading();this.grid.dataSource.pageSize(size)}if(this._pageSizeDD){this._pageSizeDD.igEditor("value",size)}}else{return this.grid.dataSource.pageSize()}},_initLoadingIndicator:function(){this._loadingIndicator=this.grid.container().igLoading().data("igLoading").indicator()},_nextPage:function(event){var noCancel=true,noCancelBinding=true;noCancel=this._trigger(this.events.pageIndexChanging,null,{newPageIndex:this.options.currentPageIndex+1,currentPageIndex:this.options.currentPageIndex,owner:this});if(noCancel){if(this.options.currentPageIndex>=this.grid.dataSource.pageCount()-1){return}this.options.currentPageIndex=this.options.currentPageIndex+1;noCancelBinding=this.grid._trigger(this.grid.events.dataBinding,null,{owner:this.grid});this._shouldFirePageIndexChanged=true;if(noCancelBinding){this._showLoading();this._overrideLabel=true;this.grid.element.trigger("iggriduisoftdirty",{owner:this});this.grid.dataSource.nextPage()}}if(event){event.stopPropagation();event.preventDefault()}},_prevPage:function(event){var noCancel=true,noCancelBinding=true;noCancel=this._trigger(this.events.pageIndexChanging,null,{newPageIndex:this.options.currentPageIndex-1,currentPageIndex:this.options.currentPageIndex,owner:this});if(noCancel){if(this.options.currentPageIndex===0){return}this.options.currentPageIndex=this.options.currentPageIndex-1;noCancelBinding=this.grid._trigger(this.grid.events.dataBinding,null,{owner:this.grid});this._shouldFirePageIndexChanged=true;if(noCancelBinding){this._showLoading();this._overrideLabel=true;this.grid.element.trigger("iggriduisoftdirty",{owner:this});this.grid.dataSource.prevPage()}}if(event){event.stopPropagation();event.preventDefault()}},_firstPage:function(event){var noCancel=true,noCancelBinding=true;noCancel=this._trigger(this.events.pageIndexChanging,null,{newPageIndex:0,currentPageIndex:this.options.currentPageIndex,owner:this});if(noCancel){noCancelBinding=this.grid._trigger(this.grid.events.dataBinding,null,{owner:this.grid});this._shouldFirePageIndexChanged=true;if(noCancelBinding){this._showLoading();this.pageIndex(0)}}if(event){event.stopPropagation();event.preventDefault()}},_lastPage:function(event){var noCancel=true,noCancelBinding=true;noCancel=this._trigger(this.events.pageIndexChanging,null,{newPageIndex:this.grid.dataSource.pageCount()-1,currentPageIndex:this.options.currentPageIndex,owner:this});if(noCancel){noCancelBinding=this.grid._trigger(this.grid.events.dataBinding,null,{owner:this.grid});this._shouldFirePageIndexChanged=true;if(noCancelBinding){this._showLoading();this.pageIndex(this.grid.dataSource.pageCount()-1)}}if(event){event.stopPropagation();event.preventDefault()}},_showLoading:function(){this._loadingIndicator.show()},_hideLoading:function(){this._loadingIndicator.hide()},_bindEvents:function(pagerElement){var paging=this,grid=this.grid,noCancel=true,id,noCancelBinding=true;id="#"+grid.element[0].id+"_pager";$(id+" li a").bind({mousedown:function(event){var newIndex=$(event.target).parent().data("pageIndex");if($.type(newIndex)==="number"&&newIndex!==paging.options.currentPageIndex){noCancel=paging._trigger(paging.events.pageIndexChanging,event,{newPageIndex:newIndex,currentPageIndex:paging.options.currentPageIndex,owner:paging});paging._shouldFirePageIndexChanged=true;if(noCancel){noCancelBinding=paging.grid._trigger(paging.grid.events.dataBinding,null,{owner:paging.grid});if(noCancelBinding){paging._showLoading(grid.element.children("tbody"));paging.pageIndex(newIndex)}}}}});$(id+" li").bind({mouseover:function(event){$(event.currentTarget).addClass(paging.css.pageHover)},mouseout:function(event){$(event.currentTarget).removeClass(paging.css.pageHover)}});this.grid.element.bind("iggridupdatinginternalrowadded",this._dataRenderedHandler);this.grid.element.bind("iggridupdatinginternalrowdeleted",this._dataRenderedHandler)},_gridRendered:function(gridContainer){if(this.options.showPageSizeDropDown===true&&this.options.pageSizeDropDownLocation==="above"&&!this._pageSizeDropDownRendered){this._renderPageSizeDropDown(gridContainer,true)}if(this.grid.options.autoAdjustHeight){this.grid._initializeHeights();this.grid._adjustLastColumnWidth()}if(this.grid.options.caption!==null){$("#"+this.grid.element[0].id+"_caption").removeClass("ui-corner-top")}},_dataRendered:function(){var id=this.grid.element[0].id,pageCount,i,html,pagerHtml=toStaticHTML('<div id="'+id+'_pager"></div>'),pageLinkHtml=toStaticHTML('<li class="${pageClass}"><a class="${pageLinkClass}" href="javascript:void(0);">${page}</a></li>'),pager=null,startRecord=0,endRecord=0,recordsCount=0,localRecordsCount=0,noCancel=true,pageList,pagesArray,dropDownContainer,startPageIndex=0,endPageIndex=0,template=this.options.pagerRecordsLabelTemplate,self=this,pagerRight=null,vpc=this.options.visiblePageCount,val=0,recordsLabel=null;this._deleteOld();noCancel=this._trigger(this.events.pagerRendering,null,{dataSource:this.grid.dataSource,owner:this});if(noCancel){if(this.grid._shouldResetPaging){this.options.currentPageIndex=0;this.grid._shouldResetPaging=false}if($("#"+id+"_pager_label").length>0){$("#"+id+"_pager .ui-iggrid-paging").remove()}else{$("#"+id+"_pager").empty()}this._initLoadingIndicator();if(this.grid.dataSource.pageSizeDirty()){this.options.currentPageIndex=this.grid.dataSource.pageIndex();this.grid.dataSource.pageSizeDirty(false)}if($("#"+id+"_pager").length===0){id=this.grid.element[0].id;pager=$(pagerHtml).appendTo("#"+id+"_container")}else{pager=$("#"+id+"_pager")}pager.addClass(this.css.pagerClass);if(this.options.showPagerRecordsLabel){recordsCount=this.grid.dataSource.totalRecordsCount()>0?this.grid.dataSource.totalRecordsCount():this.grid.dataSource.totalLocalRecordsCount();startRecord=this.options.currentPageIndex===0?1:this.options.currentPageIndex*this.pageSize()+1;if(this.grid.dataSource._filter){recordsCount=this.grid.dataSource._filteredData.length;localRecordsCount=this.grid.dataSource._filteredData.length}else{localRecordsCount=this.grid.dataSource.totalLocalRecordsCount()}endRecord=this.options.currentPageIndex===0&&this.pageSize()<=recordsCount?this.pageSize():startRecord+this.pageSize()>recordsCount?recordsCount:startRecord-1+this.pageSize();if(this.grid.dataSource.totalLocalRecordsCount()===0){startRecord=0;endRecord=0}if(endRecord>localRecordsCount&&this.options.type==="local"){endRecord=localRecordsCount}if(this.grid.container().find(".ui-iggrid-footer .ui-iggrid-results").data("overrideLabel")===0||this._overrideLabel||!this.grid.dataSource._filter){$("#"+pager[0].id+"_label").remove();template=template.replace("${startRecord}",startRecord).replace("${endRecord}",endRecord).replace("${recordCount}",recordsCount);recordsLabel=$("<span>"+template+"</span>").appendTo(pager).attr("id",pager[0].id+"_label").addClass(this.css.pagerRecordsLabel).attr("title",this.options.pagerRecordsLabelTooltip).show()}else if($("#"+pager[0].id+"_label").length===0){recordsLabel=$("<span></span>").appendTo(pager).attr("id",pager[0].id+"_label").addClass(this.css.pagerRecordsLabel).attr("title",this.options.pagerRecordsLabelTooltip).show()}if(recordsLabel){recordsLabel.data("hideflag",false)}$(pager[0].id+"_label").show();this._overrideLabel=false}pageCount=this.grid.dataSource.pageCount();pagerRight=$("<div></div>").appendTo(pager).addClass(this.css.pagerRightAreaContainer);if(this.options.showFirstLastPages===true){this._renderFirstPage(pagerRight)}if(this.options.showPrevNextPages===true){this._renderPrevPage(pagerRight)}if(this.grid.dataSource.pageCount()<=this.options.pageCountLimit){pageList=$("<ul></ul>").appendTo(pagerRight).addClass(this.css.pageList);$("#"+id+"_pager").delegate("li a",{keydown:function(event){if(event.keyCode===$.ui.keyCode.ENTER||event.keyCode===$.ui.keyCode.SPACE){self._showLoading();self.pageIndex($(event.currentTarget).closest("li").data("pageIndex"));event.stopPropagation();event.preventDefault()}},focus:function(event){$(event.currentTarget).closest("li").addClass(self.css.pageFocused)},blur:function(event){$(event.currentTarget).closest("li").removeClass(self.css.pageFocused)}});val=Math.floor(parseInt(vpc,10)/2);startPageIndex=this.options.currentPageIndex-val;if(startPageIndex<0){startPageIndex=0}endPageIndex=this.options.currentPageIndex+val;if(this.options.currentPageIndex-startPageIndex<val){endPageIndex+=val-(this.options.currentPageIndex-startPageIndex)}if(this.grid.dataSource.pageCount()-(this.options.currentPageIndex+1)<val&&vpc%2!==0){startPageIndex=startPageIndex-(val-(this.grid.dataSource.pageCount()-(this.options.currentPageIndex+1)))}if(endPageIndex>=this.grid.dataSource.pageCount()){endPageIndex=this.grid.dataSource.pageCount()-1}if(startPageIndex<0){startPageIndex=0}if(vpc%2===0&&endPageIndex-startPageIndex<vpc-1){startPageIndex-=vpc-1-(endPageIndex-startPageIndex)}if(startPageIndex<0){startPageIndex=0}for(i=startPageIndex;i<=endPageIndex&&i-startPageIndex<vpc;i++){html=pageLinkHtml.replace("${page}",i+1).replace("${pageLinkClass}",i===this.options.currentPageIndex?this.css.pageLinkCurrent:this.css.pageLink);html=html.replace("${pageClass}",i===this.options.currentPageIndex?this.css.pageCurrent:this.css.page);$(html).appendTo(pageList).attr("title",this.options.pageTooltipFormat.replace("${index}",i+1)).data("pageIndex",i)}}else{pagesArray=[];for(i=1;i<=pageCount;i++){pagesArray.push(i+this._empty())}dropDownContainer=$("<div></div>").appendTo(pagerRight).addClass(this.css.pageDropDownContainer).attr("title",this.options.currentPageDropDownTooltip);$("<span></span>").appendTo(dropDownContainer).text(this.options.currentPageDropDownLeadingLabel).addClass(this.css.pageDropDownLabels);this._curPageDD=$("<span />").css("display","none").appendTo(dropDownContainer).addClass(this.css.pageDropDownContainer).igEditor({listItems:pagesArray,readOnly:false,listMatchOnly:true,width:this.options.defaultDropDownWidth,nullable:false,listAutoComplete:true,button:"dropdown",type:"text",value:this.options.currentPageIndex+1,dropDownTriggers:"button,focus",textChanged:$.proxy(this._dropDownPageIndex,this)}).css("display","");$("<span></span>").appendTo(dropDownContainer).text(this.options.currentPageDropDownTrailingLabel.replace("${count}",this.grid.dataSource.pageCount())).addClass(this.css.pageDropDownLabels)}if(this.options.showPrevNextPages===true){this._renderNextPage(pagerRight)}if(this.options.showFirstLastPages===true){this._renderLastPage(pagerRight)}if(this.options.showPageSizeDropDown&&this.options.pageSizeDropDownLocation==="inpager"){this._renderPageSizeDropDown(pagerRight)}this._bindEvents(pager);this._hideLoading(this.grid.element.children("tbody"));pager.show();this._trigger(this.events.pagerRendered,null,{dataSource:this.grid.dataSource,owner:this});if(this._shouldFirePageIndexChanged){this._shouldFirePageIndexChanged=false;this._trigger(this.events.pageIndexChanged,null,{pageIndex:this.options.currentPageIndex,owner:this})}}},_dropDownPageIndex:function(event,args){var noCancel=true,noCancelBinding=true;noCancel=this._trigger(this.events.pageIndexChanging,null,{newPageIndex:parseInt(args.text,10)-1,currentPageIndex:this.options.currentPageIndex,owner:this});if(noCancel){noCancelBinding=this.grid._trigger(this.grid.events.dataBinding,null,{owner:this.grid});if(noCancelBinding){this._shouldFirePageIndexChanged=true;if(args.text){this._showLoading();this.pageIndex(parseInt(args.text,10)-1)}}this.grid.element.trigger("iggriduisoftdirty",{owner:this})}},_renderPrevPage:function(pager){var prev,self=this,imgspan;prev=$("<div></div>").appendTo(pager).addClass(this.css.prevPage).attr("title",this.options.prevPageTooltip);if(this.options.currentPageIndex===0){$("<span></span>").appendTo(prev).addClass(this.css.prevPageImageDisabled);$("<span></span>").appendTo(prev).addClass(this.css.prevPageLabelDisabled).append(this.options.prevPageLabelText)}else{prev.bind("mousedown",$.proxy(this._prevPage,this));imgspan=$("<span></span>").appendTo(prev).addClass(this.css.prevPageImage);$("<span></span>").appendTo(prev).addClass(this.css.prevPageLabel).append(this.options.prevPageLabelText);imgspan.wrap(toStaticHTML('<a href="javascript:void(0);"></a>'));imgspan.parent().bind({keydown:function(event){if(event.keyCode===$.ui.keyCode.ENTER||event.keyCode===$.ui.keyCode.SPACE){self._prevPage();event.stopPropagation();event.preventDefault()}},focus:function(event){$(event.currentTarget).closest("div").removeClass("ui-state-default").addClass("ui-state-focus")},blur:function(event){$(event.currentTarget).closest("div").removeClass("ui-state-focus").addClass("ui-state-default")}})}},_renderNextPage:function(pager){var next,recordsCount,self=this,imgspan;next=$("<div></div>").appendTo(pager).addClass(this.css.nextPage).attr("title",this.options.nextPageTooltip);recordsCount=this.grid.dataSource.totalRecordsCount()>0?this.grid.dataSource.totalRecordsCount():this.grid.dataSource.data().length;if(this.options.currentPageIndex===this.grid.dataSource.pageCount()-1){$("<span></span>").appendTo(next).addClass(this.css.nextPageLabelDisabled).append(this.options.nextPageLabelText);$("<span></span>").appendTo(next).addClass(this.css.nextPageImageDisabled)}else{next.bind("mousedown",$.proxy(this._nextPage,this));$("<span></span>").appendTo(next).addClass(this.css.nextPageLabel).append(this.options.nextPageLabelText);imgspan=$("<span></span>").appendTo(next).addClass(this.css.nextPageImage);imgspan.wrap(toStaticHTML('<a href="javascript:void(0);"></a>'));imgspan.parent().bind({keydown:function(event){if(event.keyCode===$.ui.keyCode.ENTER||event.keyCode===$.ui.keyCode.SPACE){self._nextPage();event.stopPropagation();event.preventDefault()}},focus:function(event){$(event.currentTarget).closest("div").removeClass("ui-state-default").addClass("ui-state-focus")},blur:function(event){$(event.currentTarget).closest("div").removeClass("ui-state-focus").addClass("ui-state-default")}})}},_renderFirstPage:function(pager){var first,self=this,imgspan;first=$("<div></div>").appendTo(pager).addClass(this.css.firstPage).attr("title",this.options.firstPageTooltip);if(this.options.currentPageIndex===0){$("<span></span>").appendTo(first).addClass(this.css.firstPageImageDisabled);$("<span></span>").appendTo(first).addClass(this.css.firstPageLabelDisabled).append(this.options.firstPageLabelText)}else{first.bind("mousedown",$.proxy(this._firstPage,this));imgspan=$("<span></span>").appendTo(first).addClass(this.css.firstPageImage);$("<span></span>").appendTo(first).addClass(this.css.firstPageLabel).append(this.options.firstPageLabelText);imgspan.wrap(toStaticHTML('<a href="javascript:void(0);"></a>'));imgspan.parent().bind({keydown:function(event){if(event.keyCode===$.ui.keyCode.ENTER||event.keyCode===$.ui.keyCode.SPACE){self._firstPage();event.stopPropagation();event.preventDefault()}},focus:function(event){$(event.currentTarget).closest("div").removeClass("ui-state-default").addClass("ui-state-focus")},blur:function(event){$(event.currentTarget).closest("div").removeClass("ui-state-focus").addClass("ui-state-default")}})}},_renderLastPage:function(pager){var last,self=this,imgspan;last=$("<div></div>").appendTo(pager).addClass(this.css.lastPage).attr("title",this.options.lastPageTooltip);if(this.options.currentPageIndex===this.grid.dataSource.pageCount()-1){$("<span></span>").appendTo(last).addClass(this.css.lastPageLabelDisabled).append(this.options.lastPageLabelText);$("<span></span>").appendTo(last).addClass(this.css.lastPageImageDisabled)}else{last.bind("mousedown",$.proxy(this._lastPage,this));$("<span></span>").appendTo(last).addClass(this.css.lastPageLabel).append(this.options.lastPageLabelText);imgspan=$("<span></span>").appendTo(last).addClass(this.css.lastPageImage);imgspan.wrap(toStaticHTML('<a href="javascript:void(0);"></a>'));imgspan.parent().bind({keydown:function(event){if(event.keyCode===$.ui.keyCode.ENTER||event.keyCode===$.ui.keyCode.SPACE){self._lastPage();event.stopPropagation();event.preventDefault()}},focus:function(event){$(event.currentTarget).closest("div").removeClass("ui-state-default").addClass("ui-state-focus")},blur:function(event){$(event.currentTarget).closest("div").removeClass("ui-state-focus").addClass("ui-state-default")}})}},_renderPageSizeDropDown:function(parent,prepend){var editorId=this.grid.id()+"_editor",cClass,items;cClass=this.options.pageSizeDropDownLocation==="above"?this.css.pageSizeDropDownContainerAbove:this.css.pageSizeDropDownContainer;if(prepend){parent=$("<div></div>").prependTo(parent).addClass(cClass)}else{parent=$("<div></div>").appendTo(parent).addClass(cClass)}parent.attr("title",this.options.pageSizeDropDownTooltip);parent=$("<div></div>").appendTo(parent).addClass(this.css.pagingResults);if(prepend){$("<span>"+this.options.pageSizeDropDownTrailingLabel+"</span>").prependTo(parent).addClass(this.css.pageSizeLabel);$("<span></span>").prependTo(parent).attr("id",editorId).addClass(this.css.pageSizeDropDown);$("<span>"+this.options.pageSizeDropDownLabel+"</span>").prependTo(parent).addClass(this.css.pageSizeLabel)}else{$("<span>"+this.options.pageSizeDropDownLabel+"</span>").appendTo(parent).addClass(this.css.pageSizeLabel);$("<span></span>").appendTo(parent).attr("id",editorId).addClass(this.css.pageSizeDropDown);$("<span>"+this.options.pageSizeDropDownTrailingLabel+"</span>").appendTo(parent).addClass(this.css.pageSizeLabel)}items=this.options.pageSizeList===null||this.options.pageSizeList.length===0?[5,10,20,25,50,75,100]:this.options.pageSizeList;if($.type(items)==="string"){items=items.split(",")}this._pageSizeDD=$("#"+editorId).css("display","none").igEditor({width:this.options.defaultDropDownWidth,button:"dropdown",dropDownOnReadOnly:true,dropDownTriggers:"button,focus",listItems:items,listMatchOnly:true,readOnly:true,textAlign:"left",type:"numeric",value:this.pageSize(),textChanged:$.proxy(this._changePageSize,this)}).css("display","");this._pageSizeDropDownRendered=true;this._trigger("pagingdropdownrendered")},_changePageSize:function(event,args){var noCancel=true,size=args.owner.value();noCancel=this._trigger(this.events.pageSizeChanging,null,{currentPageSize:this.pageSize(),newPageSize:size,owner:this});if(noCancel){this.grid.element.trigger("iggriduidirty",{owner:this});this.pageSize(size);this._trigger(this.events.pageSizeChanged,null,{pageSize:size,owner:this})}},_deleteOld:function(destroy){if(this._curPageDD){this._curPageDD.igEditor("destroy");delete this._curPageDD}if(this._pageSizeDD&&this._pageSizeDD.closest("body").length>0&&(destroy||this.options.pageSizeDropDownLocation==="inpager")){this._pageSizeDD.igEditor("destroy");delete this._pageSizeDD}this.grid.element.unbind("iggridupdatinginternalrowadded",this._dataRenderedHandler);this.grid.element.unbind("iggridupdatinginternalrowdeleted",this._dataRenderedHandler)},destroy:function(){var pager=$("#"+this.grid.element[0].id+"_pager");this.pageSize(0);this._deleteOld(true);if(this.options.showPageSizeDropDown===true&&this.options.pageSizeDropDownLocation==="above"){$("#"+this.grid.container()[0].id+" .ui-iggrid-pagesizedropdowncontainerabove").remove()}pager.remove();if(this._loadingIndicator){delete this._loadingIndicator}$.Widget.prototype.destroy.call(this);return this},_createHandlers:function(){this._dataRenderedHandler=$.proxy(this._dataRendered,this)},_injectGrid:function(gridInstance,isRebind){this.grid=gridInstance;this._createHandlers();if(this.options.type===null){this.options.type=this.grid._inferOpType()}this.grid.dataSource.settings.paging.type=this.options.type||"remote";this.grid.dataSource.settings.paging.pageIndex=this.options.currentPageIndex;this.grid.dataSource.settings.paging.pageSize=parseInt(this.options.pageSize,10);if(this.options.pageSizeUrlKey!==null&&this.options.pageIndexUrlKey){this.grid.dataSource.settings.paging.pageSizeUrlKey=this.options.pageSizeUrlKey;this.grid.dataSource.settings.paging.pageIndexUrlKey=this.options.pageIndexUrlKey}if(this.options.recordCountKey!==null){this.grid.dataSource.settings.responseTotalRecCountKey=this.options.recordCountKey}this.grid.dataSource.settings.paging.enabled=true;if(this._pageSizeDD){this._pageSizeDD.igEditor("option","value",this.options.pageSize)}},_empty:function(){return""}});$.extend($.ui.igGridPaging,{version:"13.1.20131.1012"})})(jQuery);