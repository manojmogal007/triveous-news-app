export default function swDev(){
    let swurl=`${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swurl).then((res)=>{
        console.warn('res',res)
    })
}