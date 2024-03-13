window.testSuites.push( class testParse {

testParseClassFieldsWithEqualityCheck() {
    class Space extends HTMLElement {
        form = Forms.observe(window.location.pathname, this)
    
        contents = [
            ...this.form.children.map(form => {
                switch(form.type) {
                    case "file" === "file":
                        return File(form)
                    case "space":
                        return ChildSpace(form)
                    case "link":
                        return Link()
                }
            })
        ]
    
        constructor() {
            super()
        }
    }

    const fields = window.Registry.parseClassFields(Space.toString());
    if(!(JSON.stringify(fields) === JSON.stringify(["form", "contents"]))) {
        return `Fields don't match`
    }
}

testParseClassFieldsWithInnerFunctionVariable() {
    class Space extends HTMLElement {
        form = Forms.observe(window.location.pathname, this)
    
        contents = [
            ...this.form.children.map(form => {
                let file;
                file = "hey"
                switch(form.type) {
                    case "file" === "file":
                        return File(form)
                    case "space":
                        return ChildSpace(form)
                    case "link":
                        return Link()
                }
            })
        ]
    
        constructor() {
            super()
        }
    }

    const fields = window.Registry.parseClassFields(Space.toString());
    if(!(JSON.stringify(fields) === JSON.stringify(["form", "contents"]))) {
        return `Fields don't match`
    }
}

})