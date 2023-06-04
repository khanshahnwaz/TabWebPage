import React,{useEffect, useState} from 'react'
import { Icon } from 'react-icons-kit'
import {close} from 'react-icons-kit/ikons/close'
import {circle_plus} from 'react-icons-kit/ikons/circle_plus'
const Tabs = () => {
  // track tab count
  const [count,setCount]=useState(1);
  // tabs 
  const [tabs,setTabs]=useState([]);
  // buttons to traverse through tabs
  const[buttons,setButtons]=useState([])
  // flag to remove the tabs
  const [flag,setFlag]=useState(false);
  // variable to hold the tab that is to be removed 
  const[target,setTarget]=useState()



  const showTab=(i)=>{
    const btns=document.getElementsByClassName('btns');
    const tbs=document.getElementsByClassName('tbs');
  //  console.log(btns,"and ",i)
  //  console.log(tbs)

   for(let j=0;j<tbs.length;j++){
    tbs[j].style.display='none'
  }
  
  tbs[i].style.display='flex'; 
  
    for(let j=0;j<btns.length;j++) {
        btns[j].style.backgroundColor="gray";
    };
     btns[i].style.backgroundColor='#7e22ce';

   

  }

  const removeTab=(i)=>{
    const btns=document.getElementsByClassName('btns');
    const tbs=document.getElementsByClassName('tbs');

   console.log('btns in remove tab before',buttons)
   console.log('tbs in remove tab before',tabs)
  //  buttons.filter((item,j)=>j!=i)
  //  tabs.filter((item,j)=>j!=i)
  //  setButtons(buttons);
  //  setTabs(tabs)
    for(let j=0;j<tbs.length;j++){
      if(j==i){
        console.log("tab found")
        tbs[j].style.display='none'
        // tbs.splice(j,1)
      }
    }
    for(let j=0;j<btns.length;j++){
      if(j==i){
        btns[j].style.display='none'
        // btns.splice(j,1)
      }
    }
    console.log('btns in remove tab after',buttons)
    console.log('tbs in remove tab after',tabs)
    setTimeout(()=>{
      document.getElementsByClassName('btns')[i-1].click();
    },500)
    
  }
  // inititally show first tab
  

  
  let bt= <div  key={count} onClick={()=>showTab(count-1)} className={` btns bg-[#7e22ce] border-4 border-gray-400 w-full flex justify-between`}><button className='p-5 text-white hover:bg-gray-400 '>Tab{buttons.length+1}</button> {count>1?<Icon className='rounded-2xl hover:bg-gray-300 p-5 cursor-pointer' name={count} onClick={()=>{removeTab(count-1)}}  icon={close}/>:null}</div>

  let tb=<div key={count} id={count} className='tbs flex bg-white rounded-lg shadow-2xl p-10 w-[60vw] my-5'>

      {/* left division */}
      <div className="h-[700px] bg-gradient-to-br from-[#7e22ce] to-[#a26bcd] w-[350px] border-white rounded-lg shadow-lg ">
                <p className="text-left text-base font-bold text-white pl-10 mt-4">SignUp_Form</p>
                <p className="text-4xl tracking-wider text-left mt-10 p-10 text-white font-bold">Start your <br/> journey with us</p>
                <p className="text-sm mt-2 text-left px-10 text-gray-200">Discover world best community of freelancers and business owners.</p>
                <div className=" mt-44  py-5 px-5 pb-4 mx-10 bg-[#5c1e7e] text-base font-bold  text-left text-gray-200 h-32 rounded-lg shadow-lg">Simply unbelievable! I am absolutely satisfied with my business. This is absolutely wonderful.</div>
            </div>
{/* right division */}
            <div className="bg-white h-[700px] w-[500px] ">
                <div className='mt-5 p-10 mb-0'><p className='text-left text-4xl font-bold tracking-wide text-[#7e22ce]'>Sign Up</p>
                <p className='mt-2 text-sm tracking-wide text-left font-semibold'>Have an account?<del><span className="text-[#7e22c3]">Login</span></del></p>
                
                </div>
            <form className='mx-10'>
            <label htmlFor='firstName' className='float-left text-[#7e22ce] font-bold' >FirstName</label><br/>
    <input type='text' className='rounded border-2 border-[#7e22c3] float-left mt-1 w-[70%]' name='firstName' ></input>
<br/><br/>
    <label htmlFor='lastName' className='float-left text-[#7e22ce] font-bold' >LastName</label><br/>
    <input type='text' className='rounded border-2 border-[#7e22c3] float-left mt-1 w-[70%]' name='lastName'></input>
<br/> <br/>
    <label htmlFor='department' className='float-left text-[#7e22ce] font-bold' >Department</label><br/>
                    <select name="department" className='rounded border-2 border-[#7e22c3] float-left mt-1 w-[70%]'   >
                    <option value="">Select</option>
                    
                  
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Transgender">Transgender</option>

                    </select>

           </form>
           </div>
     </div>

    

 useEffect(()=>{
  console.log('Count',count)
      setButtons([...buttons,bt])
      setTabs([...tabs,tb])
     
      
    //   console.log(tabs)
 },[count])


 useEffect(()=>{
  const btns=document.getElementsByClassName('btns');
  const tbs=document.getElementsByClassName('tbs')
  console.log(btns)
  for(let j=0;j<btns.length;j++) {
    if(j==count-1){
      console.log("found")
      btns[j].style.backgroundColor="#7e22ce";
    }else 
        btns[j].style.backgroundColor="gray";
};


for(let j=0;j<tbs.length;j++){
  if(j==count-1)
  tbs[j].style.display='flex'
  else tbs[j].style.display='none';
}
 
 
  
  
},[buttons])


 
  
  return (
    <div className='float-left'>
        <div className='flex '>
            {buttons}
            {/* {console.log(buttons)} */}
            <Icon className='w-20 h-20 hover:cursor-pointer' 
            onClick={ ()=>buttons.length!=5?(setCount(count+1)):null } 
              icon={circle_plus}/>
        </div>
        <div className='block'>
        
            {tabs}
        </div>
    </div>
  )
}

export default Tabs