const base = {
    get() {
        return {
            url : "http://localhost:8080/chongwulingyangxitong/",
            name: "chongwulingyangxitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/chongwulingyangxitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "宠物领养系统"
        } 
    }
}
export default base
