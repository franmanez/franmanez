(function(){"use strict";var e={3390:function(e,t,g){var n=g(4161);t.Z=n.Z.create({baseURL:"https://api.crossref.org",headers:{"Content-type":"application/json"}})},9749:function(e,t,g){var n=g(9242),A=g(3396),I=g(6372);const C={class:"px-3 py-2 text-bg-dark border-bottom"},a={class:"container"},r={class:"d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"},o=(0,A._)("img",{src:I,width:"70",class:"rounded-circle mx-3"},null,-1),i={class:"nav col-12 col-lg-auto my-2 justify-content-center my-md-0"},s={class:"mt-3 mx-3 text-white"},l={class:"mt-3 mx-3 text-white"},c={class:"mt-3 mx-3 text-white"},u={class:"mt-3 mx-3 text-white"},d={class:"mt-3 mx-3 text-white"},m={style:{"margin-top":"100px","margin-bottom":"100px"}};function p(e,t,g,n,I,p){const h=(0,A.up)("router-link"),f=(0,A.up)("router-view");return(0,A.wg)(),(0,A.iD)(A.HY,null,[(0,A._)("header",null,[(0,A._)("div",C,[(0,A._)("div",a,[(0,A._)("div",r,[(0,A.Wm)(h,{to:"/",class:"d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none",style:{color:"white","text-decoration":"none"}},{default:(0,A.w5)((()=>[o])),_:1}),(0,A._)("ul",i,[(0,A._)("li",s,[(0,A.Wm)(h,{to:"/doi","active-class":"text-warning",style:{color:"white","text-decoration":"none"}},{default:(0,A.w5)((()=>[(0,A.Uk)(" DOI search ")])),_:1})]),(0,A._)("li",l,[(0,A.Wm)(h,{to:"/prefix","active-class":"text-warning",style:{color:"white","text-decoration":"none"}},{default:(0,A.w5)((()=>[(0,A.Uk)(" Prefix search ")])),_:1})]),(0,A._)("li",c,[(0,A.Wm)(h,{to:"/list","active-class":"text-warning",style:{color:"white","text-decoration":"none"}},{default:(0,A.w5)((()=>[(0,A.Uk)(" List DOIs ")])),_:1})]),(0,A._)("li",u,[(0,A.Wm)(h,{to:"/referenced","active-class":"text-warning",style:{color:"white","text-decoration":"none"}},{default:(0,A.w5)((()=>[(0,A.Uk)(" Most referenced DOIs ")])),_:1})]),(0,A._)("li",d,[(0,A.Wm)(h,{to:"/referencedOrcid","active-class":"text-warning",style:{color:"white","text-decoration":"none"}},{default:(0,A.w5)((()=>[(0,A.Uk)(" Most referenced ORCIDs ")])),_:1})])])])])])]),(0,A._)("div",m,[(0,A.Wm)(f)])],64)}var h={name:"App",components:{}},f=g(89);const b=(0,f.Z)(h,[["render",p]]);var y=b,w=g(2483),v=g(7139);const k={class:"container mb-5"},D={class:"row col-12"},z={class:"col-10 mt-3"},x={class:"col-2 mt-3"},Z={key:0,class:"container"},O={class:"row col-12"},T=(0,A._)("hr",{class:"mt-0 mb-4 bg-secondary",style:{height:"3px",border:"none"}},null,-1),R={class:"row mb-5"},E={class:"col-md-10"},M=(0,A._)("label",{for:"query",class:"form-label"},"Free form search",-1),N=(0,A._)("div",{id:"queryHelp",class:"form-text text-secondary"},[(0,A._)("b",null,"Free form search queries"),(0,A.Uk)(" can be made, for example, works that include "),(0,A._)("b",null,"architecture"),(0,A.Uk)(" or "),(0,A._)("b",null,"Fran"),(0,A.Uk)(" (or both)")],-1),W={class:"col-md-2"},j=(0,A._)("label",{for:"title",class:"form-label"}," ",-1),S={key:1,class:"alert alert-danger mt-4"};function L(e,t,g,I,C,a){const r=(0,A.up)("PaginationTable"),o=(0,A.up)("TableList");return(0,A.wg)(),(0,A.iD)("div",null,[(0,A._)("div",k,[(0,A._)("div",D,[(0,A._)("div",z,[(0,A.wy)((0,A._)("input",{class:"form-control form-control-lg rounded-0","onUpdate:modelValue":t[0]||(t[0]=e=>I.prefix=e),placeholder:"10.nnnnnn"},null,512),[[n.nr,I.prefix]])]),(0,A._)("div",x,[(0,A._)("button",{type:"button",class:"btn btn-warning btn-lg rounded-0 form-control",onClick:t[1]||(t[1]=(...e)=>I.getDois&&I.getDois(...e))},"Search Prefix")])])]),null!==I.content?((0,A.wg)(),(0,A.iD)("div",Z,[(0,A._)("div",O,[(0,A._)("h1",null,(0,v.zw)(I.memberName),1),T,(0,A._)("div",R,[(0,A._)("div",E,[M,(0,A.wy)((0,A._)("input",{type:"text",class:"form-control rounded-0","onUpdate:modelValue":t[2]||(t[2]=e=>I.query=e),id:"query","aria-describedby":"queryHelp"},null,512),[[n.nr,I.query]]),N]),(0,A._)("div",W,[j,(0,A._)("button",{onClick:t[3]||(t[3]=(...e)=>I.getDois&&I.getDois(...e)),class:"form-control btn btn-dark rounded-0"},"Filter DOIs")])]),(0,A.Wm)(r,{class:"container","show-pagination":!0,"current-page":I.currentPage,"onUpdate:currentPage":t[4]||(t[4]=e=>I.currentPage=e),"page-size":I.pageSize,"onUpdate:pageSize":t[5]||(t[5]=e=>I.pageSize=e),total:I.totalElements,"handle-size-change":I.handleSizeChange,"handle-current-change":I.handleCurrentChange},null,8,["current-page","page-size","total","handle-size-change","handle-current-change"]),(0,A.Wm)(o,{content:I.content},null,8,["content"])])])):(0,A.kq)("",!0),null!=I.error?((0,A.wg)(),(0,A.iD)("div",S,(0,v.zw)(I.error),1)):(0,A.kq)("",!0)])}var P=g(5354);function U(e,t,g,n,I,C){const a=(0,A.up)("el-pagination");return g.showPagination?((0,A.wg)(),(0,A.j4)(a,{key:0,currentPage:n.page,"onUpdate:currentPage":t[0]||(t[0]=e=>n.page=e),"page-size":n.size,"onUpdate:pageSize":t[1]||(t[1]=e=>n.size=e),"page-sizes":[5,10,25],layout:"total, prev, pager, next, sizes",total:g.total,onSizeChange:n.handlePaginationSizeChange,onCurrentChange:n.handlePaginationCurrentChange},null,8,["currentPage","page-size","total","onSizeChange","onCurrentChange"])):(0,A.kq)("",!0)}var B={name:"PaginationTable",props:{showPagination:{},currentPage:{},pageSize:{},total:{},handleSizeChange:{default:null},handleCurrentChange:{default:null}},setup(e,t){const g=(0,A.Fl)((()=>e.currentPage)),n=(0,A.Fl)((()=>e.pageSize)),I=g=>{t.emit("update:currentPage",0),e.handleSizeChange&&e.handleSizeChange(g)},C=g=>{t.emit("update:currentPage",g),e.handleCurrentChange&&e.handleCurrentChange(g)};return{page:g,size:n,handlePaginationSizeChange:I,handlePaginationCurrentChange:C}}};const H=(0,f.Z)(B,[["render",U]]);var X=H,J="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAwnpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjabVBBEsMgCLz7ij5BWVR8jmnSmf6gzy8GkolNd8YFWWZFwvZ5v8JjgBIHzlVKKyUquHGjrolEQ985Rd55R2HX0lwPp0BagkbYVYr3H/V0GljomuWLkTxdWGah+QMkP0ZkAWOika9u1NwIZEJyg979K03q9QvLFmeInTCIZR77dq+6vTXrOyDakBCVAbYBMA4C+hCUgdEYIZpnVGWCuJku5N+eDoQv8G1ZIc3mDhQAAAGEaUNDUElDQyBwcm9maWxlAAB4nH2RPUjDQBzFX1OlUioOdhARyVCdLIqKdNQqFKFCqBVadTC59AuaNCQpLo6Ca8HBj8Wqg4uzrg6ugiD4AeLq4qToIiX+Ly20iPHguB/v7j3u3gFCvcw0q2sC0HTbTCXiYia7KgZeEcQwAohhXGaWMSdJSXiOr3v4+HoX5Vne5/4cvWrOYoBPJJ5lhmkTbxDPbNoG533iMCvKKvE58ZhJFyR+5LrS5DfOBZcFnhk206l54jCxWOhgpYNZ0dSIp4kjqqZTvpBpssp5i7NWrrLWPfkLQzl9ZZnrNIeQwCKWIEGEgipKKMNGlFadFAsp2o97+Addv0QuhVwlMHIsoAINsusH/4Pf3Vr5qclmUigOdL84zscIENgFGjXH+T52nMYJ4H8GrvS2v1IHYp+k19pa5Ajo2wYurtuasgdc7gADT4Zsyq7kpynk88D7GX1TFui/BYJrzd5a+zh9ANLUVfIGODgERguUve7x7p7O3v490+rvB+iCctZEBWZyAAANeGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNC40LjAtRXhpdjIiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6R0lNUD0iaHR0cDovL3d3dy5naW1wLm9yZy94bXAvIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgIHhtcE1NOkRvY3VtZW50SUQ9ImdpbXA6ZG9jaWQ6Z2ltcDozZjcyY2YxMi0wYWVkLTQ2NzQtYjk1MC1hYzhjNzc3YTAwOWYiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Y2Y4NjdjYTktNDU0ZS00M2I4LWE4MzctMDg1NzZlOGE5OWU0IgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6M2Q5NmJiMzQtN2EwMS00YmJjLWE0YzQtNzg0MDM4ZWZiMjczIgogICBkYzpGb3JtYXQ9ImltYWdlL3BuZyIKICAgR0lNUDpBUEk9IjIuMCIKICAgR0lNUDpQbGF0Zm9ybT0iTGludXgiCiAgIEdJTVA6VGltZVN0YW1wPSIxNjk4NjUyNjUwMTgzMjg5IgogICBHSU1QOlZlcnNpb249IjIuMTAuMzQiCiAgIHRpZmY6T3JpZW50YXRpb249IjEiCiAgIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIgogICB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzOjEwOjMwVDA4OjU3OjI4KzAxOjAwIgogICB4bXA6TW9kaWZ5RGF0ZT0iMjAyMzoxMDozMFQwODo1NzoyOCswMTowMCI+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmY0YzQ2ZWY2LWZhNjYtNDM0OC1iOTQzLTFiYTFhZDNhNDQ1ZSIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChMaW51eCkiCiAgICAgIHN0RXZ0OndoZW49IjIwMjMtMTAtMzBUMDg6NTc6MzArMDE6MDAiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogIDwvcmRmOkRlc2NyaXB0aW9uPgogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+H2ItYwAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+cKHgc5HswnH8sAAAnvSURBVHja7Z17bFP3Fcc/vk7svN8BkkCSQsP7NbdQTCmoaFOzttNajUiTWTsYTKNjfUgbGqhISFsrpqH9NfWllsJEsSZBN2lDpeqqdYTC3WDyxqMLJGkSEhJoCHEcEie2E3t/3JviJNeOE9/rOPb9SlGie+N7fvd8/Tvn9zi/cwzEOewOawmwAlgELAXKgFIgB6gATGM+4gVuAL1AB9AO1AHXgcs2i3grnt/XEIcEVAHVwCZgnUyAmugARKAWOG2ziA06IeNJWAtsAWqAyhiLbwFOAidsFvFC0hJid1iLgB3yT1WcfEEbgfeAwzaL2JUUhNgd1sXAHmArYI5TU+4BjgOHbBbxWkISYndYlwD7ARszC3bgNZtFrEsIQuwOayHwOvBjQGBmwi+bsle1NmUGjcnYBRwE8kgMuIC9Nov49owixO6wLgDeBzaSmKgFttssYpPa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";const Y=e=>((0,A.dD)("data-v-025ae4f1"),e=e(),(0,A.Cn)(),e),V={class:"list-group list-group-flush mt-3"},F={class:"mt-2 mb-2 row"},_={class:"col-md-9"},G={key:0,class:"mb-1 text-secondary"},q=Y((()=>(0,A._)("span",{class:"h6 text-dark"},"Title: ",-1))),Q={class:"mb-1"},K=Y((()=>(0,A._)("span",{class:"h6 text-dark"},"DOI: ",-1))),$=["href"],ee=Y((()=>(0,A._)("i",{class:"bi bi-box-arrow-up-right"},null,-1))),te={key:1,class:"text-secondary mb-1"},ge=Y((()=>(0,A._)("span",{class:"h6 text-dark"},"Deposited date: ",-1))),ne={key:2,class:"mt-1 text-dark badge bg-warning"},Ae={key:3},Ie={class:"col-md-3"},Ce={key:0,class:"mx-2"},ae=Y((()=>(0,A._)("i",{class:"bi bi-person-fill text-secondary me-1"},null,-1))),re={class:"small"},oe=["href"],ie=Y((()=>(0,A._)("img",{src:J,height:"18",alt:"ORCID"},null,-1))),se=[ie];function le(e,t,g,n,I,C){return(0,A.wg)(),(0,A.iD)("div",V,[((0,A.wg)(!0),(0,A.iD)(A.HY,null,(0,A.Ko)(g.content,((e,t)=>((0,A.wg)(),(0,A.iD)("div",{key:t,class:"list-group-item list-group-item-action flex-column align-items-start"},[(0,A._)("div",F,[(0,A._)("div",_,[(0,A._)("div",null,[e.title?((0,A.wg)(),(0,A.iD)("div",G,[q,(0,A.Uk)((0,v.zw)(e.title[0]),1)])):(0,A.kq)("",!0),(0,A._)("div",Q,[K,(0,A.Uk)(),(0,A._)("a",{href:e.DOI,target:"_blank"},[(0,A.Uk)((0,v.zw)(e.DOI)+" ",1),ee],8,$)]),e.deposited?((0,A.wg)(),(0,A.iD)("div",te,[ge,(0,A.Uk)(" "+(0,v.zw)(e.deposited["date-time"].substring(0,10)),1)])):(0,A.kq)("",!0),e.type?((0,A.wg)(),(0,A.iD)("div",ne,(0,v.zw)(e.type),1)):(0,A.kq)("",!0),e[8]?((0,A.wg)(),(0,A.iD)("div",Ae,[((0,A.wg)(!0),(0,A.iD)(A.HY,null,(0,A.Ko)(e[8].split(";"),(e=>((0,A.wg)(),(0,A.iD)("span",{key:e,class:"badge rounded-pill bg-gray text-light mr-1"},(0,v.zw)(e),1)))),128))])):(0,A.kq)("",!0)])]),(0,A._)("div",Ie,[((0,A.wg)(!0),(0,A.iD)(A.HY,null,(0,A.Ko)(e.author,((e,t)=>((0,A.wg)(),(0,A.iD)("div",{class:"text-secondary mb-1 me-5",key:t},[e.family?((0,A.wg)(),(0,A.iD)("div",Ce,[ae,(0,A._)("span",re,[(0,A.Uk)((0,v.zw)(e.family)+", "+(0,v.zw)(e.given)+" ",1),e.ORCID?((0,A.wg)(),(0,A.iD)("a",{key:0,href:e.ORCID},se,8,oe)):(0,A.kq)("",!0)])])):(0,A.kq)("",!0)])))),128))])])])))),128))])}var ce={name:"TableList",components:{},props:{content:{required:!0,type:Object}},setup(){}};const ue=(0,f.Z)(ce,[["render",le],["__scopeId","data-v-025ae4f1"]]);var de=ue,me=g(4870),pe=g(65),he={name:"DoiSearch",components:{PaginationTable:X,TableList:de},setup(){const e=(0,pe.oR)(),t=(0,me.iH)(null),g=(0,me.iH)("10.5821"),n=(0,me.iH)(""),I=(0,me.iH)(1),C=(0,A.Fl)((()=>e.getters.pageSize)),a=(0,A.Fl)((()=>e.getters.memberName)),r=(0,me.iH)(0),o=(0,me.iH)(0),i=(0,me.iH)(null),s=t=>{e.commit("setPageSize",t),I.value=1,u(),c()},l=()=>{u()};(0,A.bv)((async()=>{}));const c=()=>{t.value="",i.value=null},u=async()=>{let A=await P.Z.getDois(g.value,(I.value-1)*e.getters.pageSize,e.getters.pageSize,n.value);t.value=A.items,r.value=A["total-results"]};return{content:t,cont:o,query:n,prefix:g,getDois:u,error:i,currentPage:I,pageSize:C,totalElements:r,handleSizeChange:s,handleCurrentChange:l,memberName:a}}};const fe=(0,f.Z)(he,[["render",L]]);var be=fe;const ye={class:"container mb-5"},we={class:"row col-12"},ve={class:"col-10 mt-3"},ke={class:"col-2 mt-3"},De={key:0,class:"container"},ze={class:"row"},xe=(0,A._)("hr",{class:"mt-0 mb-4 bg-secondary",style:{height:"3px",border:"none"}},null,-1),Ze={class:"col-12"},Oe=["href"],Te=(0,A._)("i",{class:"bi bi-box-arrow-up-right"},null,-1),Re={class:"mt-1 text-dark badge bg-warning"},Ee={class:"h2 text-warning"},Me={key:1,class:"alert alert-danger mt-4"};function Ne(e,t,g,I,C,a){const r=(0,A.up)("el-table-column"),o=(0,A.up)("el-table");return(0,A.wg)(),(0,A.iD)("div",null,[(0,A._)("div",ye,[(0,A._)("div",we,[(0,A._)("div",ve,[(0,A.wy)((0,A._)("input",{class:"form-control form-control-lg rounded-0","onUpdate:modelValue":t[0]||(t[0]=e=>I.prefix=e),placeholder:"10.nnnnnn"},null,512),[[n.nr,I.prefix]])]),(0,A._)("div",ke,[(0,A._)("button",{type:"button",class:"btn btn-warning btn-lg rounded-0 form-control",onClick:t[1]||(t[1]=(...e)=>I.getDois&&I.getDois(...e))},"Search Prefix")])])]),0!=Object.keys(I.content)?((0,A.wg)(),(0,A.iD)("div",De,[(0,A._)("div",ze,[(0,A._)("h1",null,"Most referenced DOIS for "+(0,v.zw)(I.prefix),1),xe,(0,A._)("div",Ze,[(0,A.Wm)(o,{data:I.content,"default-sort":{prop:"is-referenced-by-count",order:"descending"},stripe:""},{default:(0,A.w5)((()=>[(0,A.Wm)(r,{label:"DOI"},{default:(0,A.w5)((e=>[(0,A._)("a",{href:e.row.DOI,target:"_blank"},[(0,A.Uk)((0,v.zw)(e.row.DOI)+" ",1),Te],8,Oe)])),_:1}),(0,A.Wm)(r,{prop:"title",label:"Title"}),(0,A.Wm)(r,{label:"Type",align:"center"},{default:(0,A.w5)((e=>[(0,A._)("span",Re,(0,v.zw)(e.row.type),1)])),_:1}),(0,A.Wm)(r,{label:"COUNT",sortable:""},{default:(0,A.w5)((e=>[(0,A._)("span",Ee,(0,v.zw)(e.row["is-referenced-by-count"].toLocaleString()),1)])),_:1})])),_:1},8,["data"])])])])):(0,A.kq)("",!0),null!=I.error?((0,A.wg)(),(0,A.iD)("div",Me,(0,v.zw)(I.error),1)):(0,A.kq)("",!0)])}var We={name:"MostReferencedDois",components:{},setup(){const e=(0,me.iH)([]),t=(0,me.iH)("10.5821"),g=(0,me.iH)(0),n=(0,me.iH)(null);(0,A.bv)((async()=>{}));const I=()=>{e.value="",n.value=null},C=async()=>{I(),e.value=await P.Z.mostReferenced(t.value,20)};return{content:e,cont:g,prefix:t,getDois:C,error:n}}};const je=(0,f.Z)(We,[["render",Ne]]);var Se=je;const Le={class:"container mb-5"},Pe={class:"row col-12"},Ue={class:"col-10 mt-3"},Be={class:"col-2 mt-3"},He={key:0,class:"container"},Xe={class:"row"},Je=(0,A._)("hr",{class:"mt-0 mb-4 bg-secondary",style:{height:"3px",border:"none"}},null,-1),Ye={class:"col-12"},Ve=["href"],Fe=(0,A._)("i",{class:"bi bi-box-arrow-up-right"},null,-1),_e={class:"h2 text-warning"},Ge={key:1,class:"alert alert-danger mt-4"};function qe(e,t,g,I,C,a){const r=(0,A.up)("el-table-column"),o=(0,A.up)("el-table");return(0,A.wg)(),(0,A.iD)("div",null,[(0,A._)("div",Le,[(0,A._)("div",Pe,[(0,A._)("div",Ue,[(0,A.wy)((0,A._)("input",{class:"form-control form-control-lg rounded-0","onUpdate:modelValue":t[0]||(t[0]=e=>I.prefix=e),placeholder:"10.nnnnnn"},null,512),[[n.nr,I.prefix]])]),(0,A._)("div",Be,[(0,A._)("button",{type:"button",class:"btn btn-warning btn-lg rounded-0 form-control",onClick:t[1]||(t[1]=(...e)=>I.getDois&&I.getDois(...e))},"Search Prefix")])])]),0!=Object.keys(I.content)?((0,A.wg)(),(0,A.iD)("div",He,[(0,A._)("div",Xe,[(0,A._)("h1",null,"Most referenced ORCIDs for "+(0,v.zw)(I.prefix),1),Je,(0,A._)("div",Ye,[(0,A.Uk)((0,v.zw)(I.content)+" ",1),(0,A.Wm)(o,{data:I.content,"default-sort":{prop:"count",order:"descending"},stripe:""},{default:(0,A.w5)((()=>[(0,A.Wm)(r,{label:"ORCID"},{default:(0,A.w5)((e=>[(0,A._)("a",{href:e.row.orcid,target:"_blank"},[(0,A.Uk)((0,v.zw)(e.row.orcid)+" ",1),Fe],8,Ve)])),_:1}),(0,A.Wm)(r,{label:"COUNT",sortable:""},{default:(0,A.w5)((e=>[(0,A._)("span",_e,(0,v.zw)(e.row.count.toLocaleString()),1)])),_:1})])),_:1},8,["data"])])])])):(0,A.kq)("",!0),null!=I.error?((0,A.wg)(),(0,A.iD)("div",Ge,(0,v.zw)(I.error),1)):(0,A.kq)("",!0)])}var Qe={name:"MostReferencedOrcids",components:{},setup(){const e=(0,me.iH)([]),t=(0,me.iH)("10.5821"),g=(0,me.iH)(0),n=(0,me.iH)(null);(0,A.bv)((async()=>{}));const I=()=>{e.value="",n.value=null},C=async()=>{I(),e.value=await P.Z.orcid(t.value,20)};return{content:e,cont:g,prefix:t,getDois:C,error:n}}};const Ke=(0,f.Z)(Qe,[["render",qe]]);var $e=Ke;const et=(0,A._)("div",{class:"container"},[(0,A._)("div",{class:"row col-12 center"},[(0,A._)("hr"),(0,A._)("h1",null,"DOIBoard Application"),(0,A._)("hr")])],-1),tt=[et];function gt(e,t,g,n,I,C){return(0,A.wg)(),(0,A.iD)("div",null,tt)}var nt={name:"HelloWorld",props:{msg:String}};const At=(0,f.Z)(nt,[["render",gt]]);var It=At;const Ct=[{path:"/",name:"Home",component:It},{path:"/doi",name:"doi",component:()=>g.e(443).then(g.bind(g,1289))},{path:"/prefix",name:"prefix",component:()=>g.e(443).then(g.bind(g,3185))},{path:"/table",name:"tablePagination",component:()=>g.e(443).then(g.bind(g,1417))},{path:"/list",name:"listDois",component:be},{path:"/referenced",name:"mostReferenced",component:Se},{path:"/referencedOrcid",name:"mostReferencedOrcid",component:$e},{path:"/:pathMatch(.*)*",name:"error",component:Error}],at=(0,w.p7)({history:(0,w.PO)(),routes:Ct});var rt=at,ot=(0,pe.MT)({state:{pageSize:10,memberName:"NO_NAME"},getters:{pageSize:e=>e.pageSize,memberName:e=>e.memberName},mutations:{setPageSize(e,t){e.pageSize=t},setMemberName(e,t){e.memberName=t}},actions:{},modules:{}}),it=g(2246);g(4415),g(5654);(0,n.ri)(y).use(rt).use(it.Z).use(ot).mount("#app")},5354:function(e,t,g){var n=g(7327),A=g(3390);class I{constructor(){(0,n.Z)(this,"MAILTO","&mailto=info.idp@upc.edu"),(0,n.Z)(this,"memberInfo",(async e=>{try{const t=await A.Z.get(`/members?filter=prefix:${e}${this.MAILTO}`);let g=t.data.message.items[0]["counts-type"].all;const n=Object.values(g).reduce(((e,t)=>e+t),0);let I={name:t.data.message.items[0]["primary-name"],all:t.data.message.items[0]["counts-type"].all,total:n,coverage:t.data.message.items[0]["coverage-type"].all};return I}catch(t){alert("Request ERROR: "+t.message)}})),(0,n.Z)(this,"getApprovedDateForDissertation",(async(e,t)=>{let g=new Map,n=0,I={};do{try{const C=await A.Z.get(`/prefixes/${e}/works?filter=type:${t}&select=approved&offset=${n}&rows=1000${this.MAILTO}`);I={items:C.data.message.items,length:C.data.message.items.length},I.items.forEach((e=>{let t=e.approved["date-parts"][0][0];g.has(t)?g.set(t,g.get(t)+1):g.set(t,1)})),n+=1e3}catch(r){alert("Request ERROR: "+r.message)}}while(I.length>0);let C=new Map([...g.entries()].sort());const a=Object.fromEntries([...C]);return a})),(0,n.Z)(this,"getPublishedDate",(async(e,t)=>{let g=new Map,n={};try{const g=await A.Z.get(`/prefixes/${e}/works?filter=type:${t}&facet=published:*&rows=0${this.MAILTO}`);return n={items:g.data.message.facets.published.values,length:g.data.message.facets.published.values.length},n.items}catch(C){alert("Request ERROR: "+C.message)}let I=new Map([...g.entries()].sort());return I})),(0,n.Z)(this,"getYearFirstDepositByType",(async(e,t)=>{try{const g=await A.Z.get(`/prefixes/${e}/works?filter=type:${t}&sort=created&order=asc&rows=1${this.MAILTO}`);return g.data.message.items[0].created["date-parts"][0][0]}catch(g){alert("Request ERROR: "+g.message)}})),(0,n.Z)(this,"getDepositByType",(async(e,t)=>{try{let g=await this.getYearFirstDepositByType(e,t);const n={};for(let I=g;I<=(new Date).getFullYear();I++){const g=await A.Z.get(`/prefixes/${e}/works?filter=type:${t},from-created-date:${I},until-created-date:${I}&rows=0${this.MAILTO}`);g.data.message["total-results"]>0&&(console.log(I+": "+g.data.message["total-results"]),n[I]=g.data.message["total-results"])}return n}catch(g){alert("Request ERROR: "+g.message)}})),(0,n.Z)(this,"mostReferenced",(async(e,t)=>{try{const g=await A.Z.get(`/prefixes/${e}/works?select=title,DOI,type,is-referenced-by-count&sort=is-referenced-by-count&order=desc&rows=${t}${this.MAILTO}`);return g.data.message.items}catch(g){alert("Request ERROR: "+g.message)}})),(0,n.Z)(this,"orcid",(async(e,t)=>{try{const g=await A.Z.get(`/prefixes/${e}/works?rows=0&facet=orcid:${t}${this.MAILTO}`);let n=g.data.message.facets.orcid.values;const I=Object.keys(n).map((function(e){return{orcid:e,count:n[e]}}));return I}catch(g){alert("Request ERROR: "+g.message)}})),(0,n.Z)(this,"details",(async e=>{try{const t=await A.Z.get(`/prefixes/${e}/works?select=title,DOI,type,is-referenced-by-count&sort=is-referenced-by-count&order=desc&rows=0${this.MAILTO}`);let g={status:t.data.status};return g}catch(t){alert("Request ERROR: "+t.message)}})),(0,n.Z)(this,"getDois",(async(e,t,g,n)=>{try{let I="";n&&(I=`&query=${n}`);const C=await A.Z.get(`/prefixes/${e}/works?select=DOI,title,type,deposited,author&sort=deposited&order=desc&offset=${t}&rows=${g}${I}${this.MAILTO}`);return C.data.message}catch(I){alert("Request ERROR: "+I.message)}}))}}t.Z=new I},6372:function(e,t,g){e.exports=g.p+"img/doi-logo.5e8960c6.png"}},t={};function g(n){var A=t[n];if(void 0!==A)return A.exports;var I=t[n]={exports:{}};return e[n].call(I.exports,I,I.exports,g),I.exports}g.m=e,function(){var e=[];g.O=function(t,n,A,I){if(!n){var C=1/0;for(i=0;i<e.length;i++){n=e[i][0],A=e[i][1],I=e[i][2];for(var a=!0,r=0;r<n.length;r++)(!1&I||C>=I)&&Object.keys(g.O).every((function(e){return g.O[e](n[r])}))?n.splice(r--,1):(a=!1,I<C&&(C=I));if(a){e.splice(i--,1);var o=A();void 0!==o&&(t=o)}}return t}I=I||0;for(var i=e.length;i>0&&e[i-1][2]>I;i--)e[i]=e[i-1];e[i]=[n,A,I]}}(),function(){g.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return g.d(t,{a:t}),t}}(),function(){g.d=function(e,t){for(var n in t)g.o(t,n)&&!g.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){g.f={},g.e=function(e){return Promise.all(Object.keys(g.f).reduce((function(t,n){return g.f[n](e,t),t}),[]))}}(),function(){g.u=function(e){return"js/about.1d6f834c.js"}}(),function(){g.miniCssF=function(e){return"css/about.1ae0f525.css"}}(),function(){g.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){g.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="doiboard:";g.l=function(n,A,I,C){if(e[n])e[n].push(A);else{var a,r;if(void 0!==I)for(var o=document.getElementsByTagName("script"),i=0;i<o.length;i++){var s=o[i];if(s.getAttribute("src")==n||s.getAttribute("data-webpack")==t+I){a=s;break}}a||(r=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,g.nc&&a.setAttribute("nonce",g.nc),a.setAttribute("data-webpack",t+I),a.src=n),e[n]=[A];var l=function(t,g){a.onerror=a.onload=null,clearTimeout(c);var A=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),A&&A.forEach((function(e){return e(g)})),t)return t(g)},c=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),r&&document.head.appendChild(a)}}}(),function(){g.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){g.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,g,n,A){var I=document.createElement("link");I.rel="stylesheet",I.type="text/css";var C=function(g){if(I.onerror=I.onload=null,"load"===g.type)n();else{var C=g&&("load"===g.type?"missing":g.type),a=g&&g.target&&g.target.href||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.type=C,r.request=a,I.parentNode&&I.parentNode.removeChild(I),A(r)}};return I.onerror=I.onload=C,I.href=t,g?g.parentNode.insertBefore(I,g.nextSibling):document.head.appendChild(I),I},t=function(e,t){for(var g=document.getElementsByTagName("link"),n=0;n<g.length;n++){var A=g[n],I=A.getAttribute("data-href")||A.getAttribute("href");if("stylesheet"===A.rel&&(I===e||I===t))return A}var C=document.getElementsByTagName("style");for(n=0;n<C.length;n++){A=C[n],I=A.getAttribute("data-href");if(I===e||I===t)return A}},n=function(n){return new Promise((function(A,I){var C=g.miniCssF(n),a=g.p+C;if(t(C,a))return A();e(n,a,null,A,I)}))},A={143:0};g.f.miniCss=function(e,t){var g={443:1};A[e]?t.push(A[e]):0!==A[e]&&g[e]&&t.push(A[e]=n(e).then((function(){A[e]=0}),(function(t){throw delete A[e],t})))}}}(),function(){var e={143:0};g.f.j=function(t,n){var A=g.o(e,t)?e[t]:void 0;if(0!==A)if(A)n.push(A[2]);else{var I=new Promise((function(g,n){A=e[t]=[g,n]}));n.push(A[2]=I);var C=g.p+g.u(t),a=new Error,r=function(n){if(g.o(e,t)&&(A=e[t],0!==A&&(e[t]=void 0),A)){var I=n&&("load"===n.type?"missing":n.type),C=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+I+": "+C+")",a.name="ChunkLoadError",a.type=I,a.request=C,A[1](a)}};g.l(C,r,"chunk-"+t,t)}},g.O.j=function(t){return 0===e[t]};var t=function(t,n){var A,I,C=n[0],a=n[1],r=n[2],o=0;if(C.some((function(t){return 0!==e[t]}))){for(A in a)g.o(a,A)&&(g.m[A]=a[A]);if(r)var i=r(g)}for(t&&t(n);o<C.length;o++)I=C[o],g.o(e,I)&&e[I]&&e[I][0](),e[I]=0;return g.O(i)},n=self["webpackChunkdoiboard"]=self["webpackChunkdoiboard"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=g.O(void 0,[998],(function(){return g(9749)}));n=g.O(n)})();
//# sourceMappingURL=app.a0c5a838.js.map