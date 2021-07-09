import React, {useEffect, useState} from 'react';
import Footer from './Footer';
import { download } from './Helper';
import './Home.css'
import ImageModal from './ImageModal';
import TopNavbar from './TopNavbar';

// access key
// JPtm5_FHGpYBSxCM2CDUkCpnZTDFxcHl4yhR4Yc6dSA
// secret key
// I8N_1Z-CJSyhyXPtkLBW2uTIK75el0-FSv6y2Yazlu8

const Home = () => {
  const [modal, setModal] = useState(false)
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true)

  /* const clientId = "JPtm5_FHGpYBSxCM2CDUkCpnZTDFxcHl4yhR4Yc6dSA"; */

  const imageUrl = "https://source.unsplash.com/random";
  

  
  const changeImage =async (e) =>{
    e.preventDefault()
    setModal(false)
        await fetch(imageUrl)
        .then(res => {
          console.log(res.url)
          setResult(res.url)
          setLoading(false)
        })
    }

  const downloadImage =async (e) => {
    e.preventDefault()
    download(result)
    
  };

  const handleTweet = () =>{
    console.log(result);
    window.open("https://twitter.com/intent/tweet?text="+result);
  }

  const openModal = () =>{
    setModal(true)
  }

  useEffect(() => {
    
    fetch(imageUrl)
    .then(res => {
      
      setResult(res.url)
      setLoading(false)
    })
      
  }, []);

  return (
    <>
    <div className="home">
    <TopNavbar/>
    <h2 className="heading">Random Photos</h2>
    
    <div className="buttons">
      <button className="button twitter" onClick={handleTweet}><i className="fab fa-twitter"></i>Tweet</button>
      <button className="button download" onClick={downloadImage}><i className="fas fa-download"></i>Download</button>
      <button className="button refresh" onClick={changeImage}><i className="fas fa-redo-alt"></i>Refresh</button>
    </div>
  
    {modal && (
      <ImageModal image={result}/>
    )}

    {loading && (
      <i class="fas fa-spinner"></i>
    )}
  
    <div className="image_box">
      <img src={result} className="image" alt="" onClick={openModal}/>
    

    </div>
    
   
    </div>
    <Footer/>
    </>
  );
}


export default Home;