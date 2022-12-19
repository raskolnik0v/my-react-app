import React, { Component } from 'react'
import Özl from "./Özl";
// import Gkts from "./Gkts";
import "./App.css";
import "./Deneme.css";
import Arakatman from "./Arakatman";


class App extends Component {
  render() {
    // const sayi=27;
    // const dogrumu=true;
    
    const title = "React Eğitimi";
    const description = "Daha yolun başindayiz";

    const dizim = [{
      id:1,
      title: "Hiper",
      description: "React"
    },
    {
      id:2,
      title: "Süper",
      description: "React öğrenmek"
    },
    {
      id:3,
      title: "Hiper Süper",
      description: "React kendisi"
    }
    ]
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

        <Arakatman dizim={dizim} name="Özl"/>
      </div>
    )
  }
}
export default App;