/*!@license
* Infragistics.Web.ClientUI Pivot Shared localization resources 13.1.20131.1012
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
$.ig=$.ig||{};if(!$.ig.PivotShared){$.ig.PivotShared={};$.extend($.ig.PivotShared,{locale:{invalidDataSource:"渡されたデータ ソースが null 値またはサポートされていません。",measureList:"メジャー",ok:"OK",cancel:"キャンセル",addToMeasures:"メジャーに追加",addToFilters:"フィルターに追加",addToColumns:"列に追加",addToRows:"行に追加"}})}/*!@license
* Infragistics.Web.ClientUI Pivot Shared 13.1.20131.1012
*
* Copyright (c) 2011-2012 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends on: 
*   jquery-1.4.4.js
*   jquery.ui.core.js
*   jquery.ui.widget.js
*   jquery.ui.draggable.js
*   jquery.ui.droppable.js
*   infragistics.util.js
*   infragistics.datasource.js
*   infragistics.olapxmladatasource.js
*   infragistics.olapflatdatasource.js
*   infragistics.templating.js
*   infragistics.ui.shared.js
*   infragistics.ui.scroll.js
*   infragistics.ui.tree.js
*/
(function($){var _aNull=function(val){return val===null||val===undefined},_isInstance=function(object,type){return type!==undefined&&object instanceof type},_draggable=$.ui.draggable.prototype.widgetFullName||$.ui.draggable.prototype.widgetName;$.ig=$.ig||{};$.ig.Pivot=$.ig.Pivot||{};$.ig.Pivot._pivotShared=$.ig.Pivot._pivotShared||{_const:{index:0,dragCursorAt:{top:-10,left:10},dragHelperMarkup:"<div class='ui-widget ui-corner-all ui-igpivot-draghelper'><p><span></span><strong>{0}</strong></p></div>",touchEvents:{mousedown:"touchstart"},ie:!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())},_insertIndex:0,_filterMembersCache:[],_createDataSource:function(dataSource,dataSourceOptions){var ds=null,dsOptions;if(!_aNull(dataSource)&&(_isInstance(dataSource,$.ig.OlapXmlaDataSource)||_isInstance(dataSource,$.ig.OlapFlatDataSource))){ds=dataSource}else if(!_aNull(dataSourceOptions)){dsOptions=$.extend({},dataSourceOptions);delete dsOptions.xmlaOptions;delete dsOptions.flatDataOptions;if(!_aNull(dataSourceOptions.xmlaOptions)&&!_aNull(dataSourceOptions.xmlaOptions.serverUrl)){dsOptions=$.extend(dsOptions,dataSourceOptions.xmlaOptions);ds=new $.ig.OlapXmlaDataSource(dsOptions)}else if(!_aNull(dataSourceOptions.flatDataOptions)&&(!_aNull(dataSourceOptions.flatDataOptions.dataSource)||!_aNull(dataSourceOptions.flatDataOptions.dataSourceUrl))){dsOptions=$.extend(dsOptions,dataSourceOptions.flatDataOptions);ds=new $.ig.OlapFlatDataSource(dsOptions)}}return ds},_isTouch:function(){var isTouch=typeof window.Modernizr==="object"&&window.Modernizr.touch===true;return isTouch},_getEvent:function(event){if(this._isTouch()){return this._const.touchEvents[event]}return event},_makeDroppable:function(droppable){var $this=this;if(!this._isTouch()){droppable.droppable({tolerance:"pointer",accept:function(draggable){return draggable.hasClass("ui-igpivot-dragover")===false&&draggable.closest("li.ui-igtree-node").length===0&&(draggable.hasClass("ui-igpivot-metadataitem")||draggable.find(".ui-igpivot-metadataitem:first").length>0)},over:function(event,ui){var isValid=true,markup=$(ui.helper.html()),element=ui.draggable,typeName,name;if(!element.hasClass("ui-igpivot-metadataitem")){element=element.find(".ui-igpivot-metadataitem:first")}if(element.length>0){typeName=element.attr("data-type");name=element.attr("data-name")}else{return false}if($.isFunction($this.options.customMoveValidation)){isValid=$this.options.customMoveValidation.call($this.element,$this.widgetName,typeName,name)}if(ui.helper.hasClass("ui-igpivot-draghelper")){if(isValid){markup.find("span").removeClass("ui-icon-plus ui-icon-cancel").addClass("ui-icon-close").siblings("strong");ui.helper.removeClass($this.css.dropIndicator).addClass($this.css.invalidDropIndicator).html(markup)}else{markup.find("span").removeClass("ui-icon-plus ui-icon-close").addClass("ui-icon-cancel").siblings("strong");ui.helper.removeClass($this.css.dropIndicator).addClass($this.css.invalidDropIndicator).html(markup)}}},out:function(event,ui){var markup=$(ui.helper.html());if(ui.helper.hasClass("ui-igpivot-draghelper")){markup.find("span").removeClass("ui-icon-close ui-icon-plus").addClass("ui-icon-cancel").siblings("strong");ui.helper.removeClass($this.css.dropIndicator).addClass($this.css.invalidDropIndicator).html(markup)}},drop:function(event,ui){var element=ui.draggable,isValid=true,typeName,type,name,item,noCancel;ui.draggable.unbind("."+$this.widgetName);if(!element.hasClass("ui-igpivot-metadataitem")){element=element.find(".ui-igpivot-metadataitem:first")}if(element.length>0){typeName=element.attr("data-type");name=element.attr("data-name")}else{return false}if($.isFunction($this.options.customMoveValidation)){isValid=$this.options.customMoveValidation.call($this.element,$(this).attr("data-role"),typeName,name)}if(!isValid){return false}switch(typeName){case $.ig.Hierarchy.prototype.getType().typeName():type=$.ig.Hierarchy.prototype.getType();break;case $.ig.Measure.prototype.getType().typeName():type=$.ig.Measure.prototype.getType();break;case $.ig.MeasureList.prototype.getType().typeName():type=$.ig.MeasureList.prototype.getType();break;default:return false}item=$this._ds.getCoreElement(function(el){return el.uniqueName()===name},type);if(item){noCancel=$this._triggerMetadataRemoving(event,element,item);if(noCancel){$this._ds.removeFilterItem(item);$this._ds.removeRowItem(item);$this._ds.removeColumnItem(item);$this._ds.removeMeasureItem(item);$this._triggerMetadataRemoved(event,item);$this._updateDataSource();return true}}return false}})}},_createDropAreaOptions:function(){var $this=this,dropAreaOptions={greedy:true,tolerance:"pointer",accept:function(draggable){return $this._accept($(this),draggable)},over:function(event,ui){$this._onDraggableOver(event,ui)},out:function(event,ui){$this._onDraggableOut(event,ui)},drop:function(event,ui){var element=ui.draggable,type,name;if(!element.hasClass("ui-igpivot-metadataitem")){element=element.find(".ui-igpivot-metadataitem:first")}if(element.length>0){type=element.attr("data-type");name=element.attr("data-name");return $this._onDrop(event,ui,$(this),element,type,name)}return false}};return dropAreaOptions},_onDataSourceCollectionChanged:function(collection,collectionChangedArgs,dropArea,isDisabled){var action,items,i,length,name,filter,startingIndex,previousItem,destroyDraggable;action=collectionChangedArgs.action();switch(action){case $.ig.NotifyCollectionChangedAction.prototype.add:items=collectionChangedArgs.newItems().__inner;startingIndex=collectionChangedArgs.newStartingIndex();if(startingIndex===0){this._createMetadataElement(items[0],isDisabled,"prependTo",dropArea)}else{previousItem=dropArea.find(".ui-igpivot-metadataitem")[startingIndex-1];this._createMetadataElement(items[0],isDisabled,"insertAfter",previousItem)}break;case $.ig.NotifyCollectionChangedAction.prototype.remove:items=collectionChangedArgs.oldItems().__inner;filter=function(ind,itemElement){return $(itemElement).attr("data-name")===name};destroyDraggable=function(ind,el){var draggable=$(el).data(_draggable);if(draggable){draggable.destroy()}};for(i=0,length=items.length;i<length;i++){if(items[i]instanceof $.ig.MeasureList){dropArea.find(".ui-igpivot-metadataitem[data-type="+$.ig.MeasureList.prototype.getType().typeName()+"]").each(destroyDraggable).remove()}else{name=items[i].uniqueName();dropArea.find(".ui-igpivot-metadataitem").filter(filter).each(destroyDraggable).remove()}}break;case $.ig.NotifyCollectionChangedAction.prototype.reset:destroyDraggable=function(ind,el){var draggable=$(el).data(_draggable);if(draggable){draggable.destroy()}};dropArea.find(".ui-igpivot-metadataitem").each(destroyDraggable).remove();break}},_createMetadataElement:function(item,isDisabled,appendFunc,target){var $this=this,dragAndDropSettings=this.options.dragAndDropSettings,metadataElement,metadataElementMarkup;metadataElementMarkup="<li ";if(item instanceof $.ig.MeasureList&&item.caption()===null){item.caption($.ig.PivotShared.locale.measureList)}else{metadataElementMarkup+="data-name='"+item.uniqueName()+"' "}metadataElementMarkup+="title='"+item.caption()+"' data-type='"+item.getType().typeName()+"'>";if(item instanceof $.ig.Hierarchy&&!isDisabled){metadataElementMarkup+="<span class='ui-icon "+this.css.filterIcon+"'></span>"}metadataElementMarkup+="<span data-role='caption'>"+item.caption()+"</span>";if(!isDisabled){metadataElementMarkup+="<span class='ui-icon ui-icon-close'></span>"}metadataElementMarkup+="</li>";metadataElement=$(metadataElementMarkup).addClass(this.css.metadataItem);metadataElement[appendFunc](target);if(!isDisabled){metadataElement.find("span.ui-icon-pivot-smallfilter").click(function(event){$this._createFilterDropDown(event,this,item);return false});metadataElement.find("span.ui-icon-close").click(function(event){var noCancel=$this._triggerMetadataRemoving(event,metadataElement,item);if(noCancel){$this._ds.removeFilterItem(item);$this._ds.removeRowItem(item);$this._ds.removeColumnItem(item);$this._ds.removeMeasureItem(item);$this._triggerMetadataRemoved(event,item);$this._updateDataSource();return false}return false});if(!this._isTouch()){metadataElement.draggable({appendTo:dragAndDropSettings.appendTo,containment:dragAndDropSettings.containment,opacity:dragAndDropSettings.dragOpacity,zIndex:dragAndDropSettings.zIndex,cursorAt:this._const.dragCursorAt,revert:false,cancel:".ui-icon",helper:function(event){var target=$(event.target).closest(".ui-igpivot-metadataitem").find("span[data-role='caption']"),markup=$($this._const.dragHelperMarkup.replace("{0}",target.text()));markup.addClass($this.css.invalidDropIndicator).find("span").addClass("ui-icon");return markup},start:function(event,ui){return $this._triggerDragStart(event,ui,item)},drag:function(event,ui){return $this._triggerDrag(event,ui,item)},over:function(event,ui){$this._onDraggableOver(event,ui)},out:function(event,ui){$this._onDraggableOut(event,ui)},stop:function(event,ui){$this._triggerDragStop(event,ui)}})}metadataElement.click(function(event){$this._createMetadataItemDropDown(event,this,item)})}return metadataElement},_accept:function(targetElement,draggable){var target,typeName,isValid=false;if(!draggable.hasClass("ui-igpivot-metadataitem")){draggable=draggable.find(".ui-igpivot-metadataitem:first")}typeName=draggable.attr("data-type");target=targetElement.attr("data-role");if(typeName){switch(target){case"rows":case"columns":isValid=typeName===$.ig.Hierarchy.prototype.getType().typeName()||typeName===$.ig.MeasureList.prototype.getType().typeName();break;case"filters":isValid=typeName===$.ig.Hierarchy.prototype.getType().typeName();break;case"measures":isValid=typeName===$.ig.Measure.prototype.getType().typeName();break}}return isValid},_onDraggableOver:function(event,ui){var $this=this,isValid=true,markup=$(ui.helper.html()),element=ui.draggable,typeName,name;ui.draggable.addClass("ui-igpivot-dragover");if(!element.hasClass("ui-igpivot-metadataitem")){element=element.find(".ui-igpivot-metadataitem:first")}if(element.length>0){typeName=element.attr("data-type");name=element.attr("data-name")}else{return false}if($.isFunction(this.options.customMoveValidation)){isValid=this.options.customMoveValidation.call(this.element,$(event.target).attr("data-role"),typeName,name)}if(ui.helper.hasClass("ui-igpivot-draghelper")){if(isValid){markup.find("span").removeClass("ui-icon-cancel ui-icon-close").addClass("ui-icon-plus").siblings("strong");ui.helper.removeClass(this.css.invalidDropIndicator).addClass(this.css.dropIndicator).html(markup)}else{markup.find("span").removeClass("ui-icon-plus ui-icon-close").addClass("ui-icon-cancel").siblings("strong");ui.helper.removeClass(this.css.dropIndicator).addClass(this.css.invalidDropIndicator).html(markup)}}if(!isValid){return false}ui.draggable.bind("drag."+this.widgetName,function(event1,ui1){$this._onDraggableDrag(event1,ui1)})},_onDraggableDrag:function(event,ui){var target=$(event.originalEvent.target),insertItem="<li class='"+this.css.insertItem+"'></li>";if(target.hasClass("ui-igpivot-insertitem")){if(!this._const.ie||this._const.ie&&document.documentMode!==8){return}}$(document).find(".ui-igpivot-insertitem").remove();if(target.is("span")){target=target.closest(".ui-igpivot-metadataitem")}if(target.is(".ui-igpivot-metadataitem")){if(this._shouldAppendToTarget(target,ui)){this._insertIndex=target.index()+1;$(insertItem).insertAfter(target)}else{if(target.index()===0){this._insertIndex=0;$(insertItem).insertBefore(target)}else{this._insertIndex=target.index();$(insertItem).insertBefore(target)}}}else if(target.is(".ui-igpivot-droparea")){target=target.find(".ui-igpivot-metadataitem:last");this._insertIndex=target.index()+1;$(insertItem).insertAfter(target)}},_onDraggableOut:function(event,ui){var markup=$(ui.helper.html()),invalidIcon;ui.draggable.removeClass("ui-igpivot-dragover");invalidIcon=ui.draggable.closest("li.ui-igtree-node").length===0?"ui-icon-close":"ui-icon-cancel";if(ui.helper.hasClass("ui-igpivot-draghelper")){markup.find("span").removeClass("ui-icon-plus").addClass(invalidIcon).siblings("strong");ui.helper.removeClass(this.css.dropIndicator).addClass(this.css.invalidDropIndicator).html(markup)}ui.draggable.unbind("drag."+this.widgetName);$(document).find(".ui-igpivot-insertitem").remove();this._insertIndex=0},_onDrop:function(event,ui,targetElement,draggedElement,typeName,name){var dataSource=this._ds,isValid=true,targetRole=$(targetElement).attr("data-role"),targetIndex=this._insertIndex,item,type,sourceRole,sourceIndex,filterMembers,i,noCancel;ui.draggable.unbind("."+this.widgetName);$(document).find(".ui-igpivot-insertitem").remove();if($.isFunction(this.options.customMoveValidation)){isValid=this.options.customMoveValidation.call(this.element,$(event.target).attr("data-role"),typeName,name)}if(!isValid){return false}switch(typeName){case $.ig.Hierarchy.prototype.getType().typeName():type=$.ig.Hierarchy.prototype.getType();break;case $.ig.Measure.prototype.getType().typeName():type=$.ig.Measure.prototype.getType();break;case $.ig.MeasureList.prototype.getType().typeName():type=$.ig.MeasureList.prototype.getType();break;default:return false}item=dataSource.getCoreElement(function(el){return el.uniqueName()===name},type);if(!item){return false}noCancel=this._triggerMetadataDropping(event,ui,targetElement,draggedElement,item,targetIndex);if(noCancel){if((sourceIndex=$.inArray(item,dataSource.filters()))>-1){sourceRole="filters"}else if((sourceIndex=$.inArray(item,dataSource.rowAxis()))>-1){sourceRole="rows"}else if((sourceIndex=$.inArray(item,dataSource.columnAxis()))>-1){sourceRole="columns"}else if((sourceIndex=$.inArray(item,dataSource.measures()))>-1){sourceRole="measures"}else{sourceRole=null}if(sourceRole!==null&&sourceRole===targetRole&&sourceIndex<targetIndex){targetIndex--}if(item instanceof $.ig.MeasureList){dataSource.setMeasureListLocation(targetRole);dataSource.setMeasureListIndex(targetIndex)}else{if(item instanceof $.ig.Hierarchy){filterMembers=dataSource.getFilterMemberNames(name)}switch(sourceRole){case"filters":dataSource.removeFilterItem(item);break;case"rows":dataSource.removeRowItem(item);break;case"columns":dataSource.removeColumnItem(item);break;case"measures":dataSource.removeMeasureItem(item);break}switch(targetRole){case"filters":dataSource.insertFilterItem(targetIndex,item);break;case"rows":dataSource.insertRowItem(targetIndex,item);break;case"columns":dataSource.insertColumnItem(targetIndex,item);break;case"measures":dataSource.insertMeasureItem(targetIndex,item);break}if(item instanceof $.ig.Hierarchy){for(i=0;i<filterMembers.length;i++){dataSource.addFilterMember(name,filterMembers[i])}}}if(this.widgetName==="igPivotGrid"&&ui.draggable.data(_draggable)){delete ui.draggable.data(_draggable).plugins.stop}this._updateDataSource();this._triggerMetadataDropped(event,ui,targetElement,draggedElement,item,targetIndex);return true}return false},_createMetadataItemDropDown:function(event,targetElement,metadataItem){var $this=this,options=this.options,closestDropArea,dropDownParent,dropDownElement,addMeasureList,addHierarchy,buttons,customValidation;closestDropArea=$(targetElement).closest(".ui-igpivot-droparea").attr("data-role");if($.isFunction(this.options.customMoveValidation)){customValidation=function(location){return $this.options.customMoveValidation.call($this.element,location,metadataItem.getType().name,metadataItem.uniqueName()||undefined)}}else{customValidation=function(){return true}}dropDownParent=$(this.options.dropDownParent).first();dropDownElement=$("<div class='"+this.css.metadataItemDropDown+"'></div>");dropDownElement.data("efh","1");dropDownElement.css("position","absolute").appendTo(dropDownParent).position({of:targetElement,my:"left top",at:"left bottom"}).bind(this._getEvent("mousedown"),function(event1){event1.stopPropagation()});if(metadataItem instanceof $.ig.Measure){if(!options.disableMeasuresDropArea&&closestDropArea!=="measures"&&customValidation("measures")){$("<button>"+$.ig.PivotShared.locale.addToMeasures+"</button>").appendTo(dropDownElement).click(function(){$this._ds.removeMeasureItem(metadataItem);$this._ds.addMeasureItem(metadataItem);dropDownElement.remove();$this._updateDataSource()})}}else if(metadataItem instanceof $.ig.MeasureList){addMeasureList=function(location,index){$this._ds.setMeasureListLocation(location);$this._ds.setMeasureListIndex(index);dropDownElement.remove();$this._updateDataSource()};if(!options.disableColumnsDropArea&&closestDropArea!=="columns"&&customValidation("columns")){$("<button>"+$.ig.PivotShared.locale.addToColumns+"</button>").appendTo(dropDownElement).click(function(){addMeasureList("columns",$this._ds.columnAxis().length)})}if(!options.disableRowsDropArea&&closestDropArea!=="rows"&&customValidation("rows")){$("<button>"+$.ig.PivotShared.locale.addToRows+"</button>").appendTo(dropDownElement).click(function(){addMeasureList("rows",$this._ds.rowAxis().length)})}}else{addHierarchy=function(addMethod){var i,name=metadataItem.uniqueName(),filterMembers=$this._ds.getFilterMemberNames(name);$this._ds.removeFilterItem(metadataItem);$this._ds.removeColumnItem(metadataItem);$this._ds.removeRowItem(metadataItem);$this._ds[addMethod](metadataItem);for(i=0;i<filterMembers.length;i++){$this._ds.addFilterMember(name,filterMembers[i])}dropDownElement.remove();$this._updateDataSource()};if(!options.disableFiltersDropArea&&closestDropArea!=="filters"&&customValidation("filters")){$("<button>"+$.ig.PivotShared.locale.addToFilters+"</button>").appendTo(dropDownElement).click(function(){addHierarchy("addFilterItem")})}if(!options.disableColumnsDropArea&&closestDropArea!=="columns"&&customValidation("columns")){$("<button>"+$.ig.PivotShared.locale.addToColumns+"</button>").appendTo(dropDownElement).click(function(){addHierarchy("addColumnItem")})}if(!options.disableRowsDropArea&&closestDropArea!=="rows"&&customValidation("rows")){$("<button>"+$.ig.PivotShared.locale.addToRows+"</button>").appendTo(dropDownElement).click(function(){addHierarchy("addRowItem")})}}buttons=dropDownElement.find("button");if(buttons.length===0){dropDownElement.remove();return}buttons.igButton();$(document).bind(this._getEvent("mousedown")+"."+this.widgetName,function(){dropDownElement.remove();$(document).unbind("."+$this.widgetName)})},_createFilterDropDown:function(event,targetElement,hierarchy){var $this=this,hierarchyName,filterMembers,dropDownParent,dropDownElement,filterMembersTree,buttonContainer,removeFilterDropDown,noCancel,i,length;noCancel=this._triggerFilterDropDownOpening(event,hierarchy);if(noCancel){hierarchyName=hierarchy.uniqueName();dropDownParent=$(this.options.dropDownParent).first();dropDownElement=$("<div class='"+this.css.filterDropDown+"'></div>");dropDownElement.data("efh","1");dropDownElement.css("position","absolute").attr("data-hierarchy",hierarchyName).appendTo(dropDownParent).position({of:targetElement,my:"left top",at:"left bottom"}).bind(this._getEvent("mousedown"),function(event1){event1.stopPropagation()});filterMembersTree=$("<div class='"+this.css.filterMembers+"'></div>").appendTo(dropDownElement);buttonContainer=$("<div class='ui-igpivot-filterdropdown-buttoncontainer'></div>").appendTo(dropDownElement);$("<button></button>").attr("data-role","ok").text($.ig.PivotShared.locale.ok).appendTo(buttonContainer).igButton().igButton("disable").click(function(event1){$this._onFilterOk(event1,dropDownElement,hierarchy,filterMembersTree)});removeFilterDropDown=function(event1){$this._removeFilterDropDown(event1,dropDownElement,hierarchy)};$("<button></button>").attr("data-role","cancel").text($.ig.PivotShared.locale.cancel).appendTo(buttonContainer).igButton().click(removeFilterDropDown);$(document).bind(this._getEvent("mousedown")+"."+this.widgetName,removeFilterDropDown);for(i=0,length=this._filterMembersCache.length;i<length;i++){if(this._filterMembersCache[i].hierarchyName===hierarchyName){filterMembers=this._filterMembersCache[i].filterMembers;break}}if(filterMembers){this._initTree(filterMembersTree,filterMembers,hierarchyName)}else{this._ds.getMembersOfHierarchy(hierarchyName).done(function(members){$this._onFilterMembersLoaded(members,hierarchy)}).fail(removeFilterDropDown)}this._triggerFilterDropDownOpened(event,dropDownElement,hierarchy)}},_onFilterMembersLoaded:function(members,hierarchy){var hierarchyName=hierarchy.uniqueName(),hierarchyFilterView,parsedFilterMebmers,dropDownElement,filterMembersTree;hierarchyFilterView=new $.ig.HierarchyFilterView(hierarchy);hierarchyFilterView.addFiltersForMembers(members);parsedFilterMebmers=this._parseFilterMembers(hierarchyFilterView.getRootFilterMembers());this._filterMembersCache.push({hierarchyName:hierarchyName,filterMembers:parsedFilterMebmers});this._triggerFilterMembersLoaded(parsedFilterMebmers);dropDownElement=$(".ui-igpivot-filterdropdown").filter(function(){return $(this).attr("data-hierarchy")===hierarchyName});if(dropDownElement.length>0){filterMembersTree=$(dropDownElement[0]).find(".ui-igpivot-filtermembers");this._initTree(filterMembersTree,parsedFilterMebmers,hierarchyName)}},_parseFilterMembers:function(filterMembers){var parsedFilterMembers=[],parsedFilterMember,filterMember,member,children,i;filterMembers=filterMembers.__inner;for(i=0;i<filterMembers.length;i++){filterMember=filterMembers[i];member=filterMember.member();parsedFilterMember={};parsedFilterMember.member=member;parsedFilterMember.caption=member.caption();parsedFilterMember.uniqueName=member.uniqueName();children=filterMembers[i].children();if(children){parsedFilterMember.children=this._parseFilterMembers(children)}parsedFilterMembers.push(parsedFilterMember)}return parsedFilterMembers},_initTree:function(filterMembersTree,rootFilterMembers,hierarchyName){var existingFilterMembers,i,length,node;filterMembersTree.igTree({checkboxMode:"triState",dataSource:rootFilterMembers,bindings:{textKey:"caption",valueKey:"uniqueName",childDataProperty:"children"},nodeCheckstateChanged:function(event1,ui1){var okButton=$(this).siblings(".ui-igpivot-filterdropdown-buttoncontainer").children(".ui-igbutton[data-role=ok]");if(ui1.newCheckedNodes&&ui1.newCheckedNodes.length>0){okButton.igButton("enable")}else{okButton.igButton("disable")}}});existingFilterMembers=this._ds.getFilterMemberNames(hierarchyName);if(existingFilterMembers.length>0){for(i=0,length=existingFilterMembers.length;i<length;i++){node=filterMembersTree.igTree("nodesByValue",existingFilterMembers[i]);filterMembersTree.igTree("toggleCheckstate",node)}}else{for(i=0,length=rootFilterMembers.length;i<length;i++){node=filterMembersTree.igTree("nodeByPath",i);filterMembersTree.igTree("toggleCheckstate",node)}}for(i=0,length=rootFilterMembers.length;i<length;i++){node=filterMembersTree.igTree("nodeByPath",i);filterMembersTree.igTree("expand",node)}},_removeFilterDropDown:function(event,dropDownElement,hierarchy){var noCancel;noCancel=this._triggerFilterDropDownClosing(event,dropDownElement,hierarchy);if(noCancel){dropDownElement.find(".ui-igtree").igTree("destroy");dropDownElement.find(".ui-button").igButton("destroy");dropDownElement.remove();$(document).unbind("."+this.widgetName);this._triggerFilterDropDownClosed(event,hierarchy)}},_onFilterOk:function(event,dropDownElement,hierarchy,filterMembersTree){var dataSource=this._ds,hierarchyName=hierarchy.uniqueName(),checkedFilterMembers,i,noCancel;checkedFilterMembers=[];this._addFilterMembersRecursive(filterMembersTree.children("ul[data-depth=0]"),checkedFilterMembers);noCancel=this._triggerFilterDropDownOk(event,dropDownElement,hierarchy,checkedFilterMembers);if(noCancel){dataSource.removeAllFilterMembers(hierarchyName);for(i=0;i<checkedFilterMembers.length;i++){dataSource.addFilterMember(hierarchyName,checkedFilterMembers[i])}this._updateDataSource();this._removeFilterDropDown(event,dropDownElement,hierarchy)}},_addFilterMembersRecursive:function(nodeContainer,filterMembmers){var $this=this;nodeContainer.children("li").each(function(ind,el){var node=$(el);if(node.children("span[data-role='checkbox'][data-chk='on']").length>0){filterMembmers.push(node.attr("data-value"))}else{node.children("ul").each(function(ind1,el1){$this._addFilterMembersRecursive($(el1),filterMembmers)})}})},_triggerDataSourceInitialized:function(evt,args){this._trigger("dataSourceInitialized",evt,args)},_triggerDataSourceUpdated:function(evt,args){this._trigger("dataSourceUpdated",evt,args)},_triggerDragStart:function(event,ui,item){var args={helper:ui.helper,offset:ui.offset,originalPosition:ui.originalPosition,position:ui.position,metadata:item};return this._trigger("dragStart",event,args)},_triggerDrag:function(event,ui,item){var args={helper:ui.helper,offset:ui.offset,originalPosition:ui.originalPosition,position:ui.position,metadata:item};return this._trigger("drag",event,args)},_triggerDragStop:function(event,ui){this._trigger("dragStop",event,ui)},_triggerMetadataDropping:function(event,ui,targetElement,item,itemIndex){var args={helper:ui.helper,offset:ui.offset,position:ui.position,targetElement:targetElement,metadata:item,metadataIndex:itemIndex};return this._trigger("metadataDropping",event,args)},_triggerMetadataDropped:function(event,ui,targetElement,draggedElement,item,itemIndex){var args={helper:ui.helper,offset:ui.offset,position:ui.position,targetElement:targetElement,draggedElement:draggedElement,metadata:item,metadataIndex:itemIndex};this._trigger("metadataDropped",event,args)},_triggerMetadataRemoving:function(event,targetElement,item){var args={targetElement:targetElement,metadata:item};return this._trigger("metadataRemoving",event,args)},_triggerMetadataRemoved:function(event,item){var args={metadata:item};this._trigger("metadataRemoved",event,args)},_triggerFilterDropDownOpening:function(event,hierarchy){var args={hierarchy:hierarchy};return this._trigger("filterDropDownOpening",event,args)},_triggerFilterDropDownOpened:function(event,dropDownElement,hierarchy){var args={dropDownElement:dropDownElement,hierarchy:hierarchy};this._trigger("filterDropDownOpened",event,args)},_triggerFilterMembersLoaded:function(rootFilterMembers){var args={rootFilterMembers:rootFilterMembers};this._trigger("filterMembersLoaded",null,args)},_triggerFilterDropDownOk:function(event,dropDownElement,hierarchy,filterMembers){var args={dropDownElement:dropDownElement,hierarchy:hierarchy,filterMembers:filterMembers};return this._trigger("filterDropDownOk",event,args)},_triggerFilterDropDownClosing:function(event,dropDownElement,hierarchy){var args={dropDownElement:dropDownElement,hierarchy:hierarchy};return this._trigger("filterDropDownClosing",event,args)},_triggerFilterDropDownClosed:function(event,hierarchy){var args={hierarchy:hierarchy};this._trigger("filterDropDownClosed",event,args)}};$.widget("ui.igOlapDataSourceWidget",{_create:function(){this._ds=$.ig.Pivot._pivotShared._createDataSource(null,this.options.dataSourceOptions)},dataSource:function(){return this._ds}})})(jQuery);