console.log('我是main.js')

let n =1
getPage.onclick =() =>{
    const request = new XMLHttpRequest()
    request.open('GET',`/page${n+1}`)
    request.onreadystatechange = () =>{
        if(request.readyState===4 && request.status ===200){
            const array = JSON.parse(request.response)
            array.forEach(item=> {
                const li =document.createElement("li")
                li.textContent = item.id
                xxx.appendChild(li)                
            });
            n +=1
        }
    }
    request.send()
}
getJSON.onclick =() =>{
    const request = new XMLHttpRequest()
    request.open('GET','/5.json')
    request.onreadystatechange =()=>{
        if(request.readyState === 4 && request.status ===200){
            const object = JSON.parse(request.response)
            console.log(object)
            myName.textContent = object.name
        }
    }
    request.send()
}


getXML.onclick =()=>{
    const request = new XMLHttpRequest()
    request.open('get','/4.xml')
    request.onreadystatechange = ()=>{
        if(request.readyState===4 && request.status ===200){
            const dom = request.responseXML
            const text =dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    }
    request.send()
}

getHTML.onclick= ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/3.html')
    request.onload=() =>{
        console.log(request.response)
        const div =document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
        // 创建div标签，填写内容，插入body里
    }
    request.onerror = ()=>{}
    request.send()
}
getJS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onreadystatechange =()=>{
        console.log(request.readyState)
        if(request.readyState === 4){
            // 下载完成,不知道正确或错误
            if(request.status >=200 && request.status<300){
                const script = document.createElement('script')
                script.innerHTML = request.response
                document.body.appendChild(script)
                // 创建script标签，填写内容，插到body里
            }else {
                alert('加载js失败')
            }           
        }    
    }    
    request.send()
}

getCSS.onclick =()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/style.css')
    request.onload = ()=>{
        console.log(request.response)
        const style = document.createElement('style')
        style.innerHTML = request.response 
        document.head.appendChild(style)
    }
    request.onerror =()=>{
        console.log('失败了')
    }
    request.send()
}
