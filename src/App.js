import React, { Component } from 'react'
import Özl from "./Özl";
// import Gkts from "./Gkts";
import "./App.css";
import "./Deneme.css";
import Arakatman from "./Arakatman";
import Counter from "./Counter";
import Footer from "./Footer";

    // const title = "React Eğitimi";
    // const description = "Daha yolun başindayiz";

    // const dizim = [{
    //   id:1,
    //   title: "Hiper",
    //   description: "React"
    // },
    // {
    //   id:2,
    //   title: "Süper",
    //   description: "React öğrenmek"
    // },
    // {
    //   id:3,
    //   title: "Hiper Süper",
    //   description: "React kendisi"
    // }
    // ]
class App extends Component {

  // state = {
  //   name:"göktttaaaşşş"
  // }
  //   addNews()
  // {
  //   console.log("Ekledim");
  //   dizim.push({
  //     id:4,
  //     title:"muhteşem",
  //     description:"muhteşem ötesi"
  //   })
  //   console.log(dizim);
  // }

  // changeName()
  // {
  //   console.log(this.state)
  //   this.setState(
  //     {
  //       name :"ÖZALLLLALLALALAL"
  //     }
  //   )

  // }

  render() {
    // const sayi=27;
    // const dogrumu=true;
    
    
    return (
      <div className="App">
        {/* <h1>Merhaba Dünya</h1>
        <label htmlFor=''> </label>
        <h4>{2 + 2}</h4>
        {"özal".toUpperCase()}
        <h4>{sayi}</h4> */}
        {/* sayi değişkenini 7 olarak tanımladıımız için sayi çıktısı 27 olacak */}
        {
          //       dogrumu ? <p>Kullanıcı var</p> : <p>Kullanıcı yok</p>
          //       dogrumu değişkenini true olarak tanımladığımız için kullanıcı var çıktısı verecel
          //     
        }
        {/* <Özl baslik={title} aciklama={description} /> */}

        {/* <Özl baslik={dizim[0].title} aciklama={dizim[0].description} />
        <Özl baslik={dizim[1].title} aciklama={dizim[1].description} />
        <Özl baslik={dizim[2].title} aciklama={dizim[2].description} /> */}

        {/* burada const dizim deki açıklama ve baslik propslarını çağırdık 3 kez */}

        {/* <h1>{this.state.name}</h1>
        <button onClick={this.changeName.bind(this)}>Değiştir</button>
        <Arakatman dizim={dizim} name="Özl" addNews={this.addNews}/> */}

        <Counter/>

        <Footer/>
      </div>
    )
  }
}
export default App;