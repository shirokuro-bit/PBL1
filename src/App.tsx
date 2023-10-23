import React, {useState} from 'react';
import {animateScroll as scroll, Link} from "react-scroll";
import './App.css';

import styles from './App.module.css';
import Header from './components/header'
import HorizontalRule from "./components/hr";
import ModalContent from './components/modal';

function App() {
  const [modalIsOpen1, setIsOpen1] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);
  const [modalIsOpen3, setIsOpen3] = useState(false);
  const [modalIsOpen4, setIsOpen4] = useState(false);
  
  return (
    <div className="App" style={{background: `url(${process.env.PUBLIC_URL}/BackgroundImg.jpg) no-repeat top / cover`}}>
        <Header/>
        <HorizontalRule/>
        <main>
          <div className={styles.img}>
      
          </div>
          <nav className={styles.g_navi}>
            <ul className={styles.g_navi_ul}>
              <li className={styles.g_navi_ul_li}><Link to={"test1"} smooth={true}>あらまし</Link></li>
              <li className={styles.g_navi_ul_li}><Link to={"test2"} smooth={true}>どんな人材を育てたい？</Link></li>
              <li className={styles.g_navi_ul_li}><Link to={"test3"} smooth={true}>どんなプログラムが必要？</Link></li>
              <li className={styles.g_navi_ul_li}><Link to={"test4"} smooth={true}>その人材の未来</Link></li>
            </ul>
          </nav>
            <div id={"test1"}>
              <div className={styles.h2}>
                <h2>あらまし</h2>
              </div>
              <div className={styles.box1}>
                <p className={styles.text}>第一次産業である農業に着目</p>
              </div>
              <div className={styles.box1}>
                <p className={styles.text}>
                  農業は高齢化が顕著に進み、新規の若い農家が減少している。
                </p>
                <ModalContent image={"https://d1obh0a64dzipo.cloudfront.net/images/5856.jpg"}
                              modalIsOpen={modalIsOpen1}
                              setIsOpen={setIsOpen1}>
                  <a href={"https://minorasu.basf.co.jp/80466"}><p>出典：農林水産省「農林業センサス」よりminorasu編集部作成</p></a>
                </ModalContent>
              </div>
              <div className={styles.box1}>
                <p className={styles.text}>
                  縮小していく農家、しかし我々の生活には必須。
                </p>
              </div>
              <div className={styles.box1}>
                <p className={styles.text}>
                  農業全体に対して若い人に関心を持ってもらいたい。<br/>
                  {/*でも、身近に農家がなければ関心を持つ切っ掛けがない。<br/>*/}
                  {/*農業は泥臭い、肉体労働の過酷さ等、*/}負のイメージが強く若者が積極的になりたいと思わない。<br/>
                  {/*切っ掛けの為になればいいと、このようなプロジェクトを考えています。<br/>*/}
                  見方が変わるきっかけに！
                </p>
                <ModalContent image={"https://www.ryutsu-kenkyusho.co.jp/cms/wp-content/uploads/2015/10/93F182CCE7DD82AA8Ea82E991E61848D86_907D87C.png"}
                              modalIsOpen={modalIsOpen2}
                              setIsOpen={setIsOpen2}>
                  <a href={"https://www.ryutsu-kenkyusho.co.jp/columns/新規就農の課題と展望-～頑張れ！新規就農者～/"}><p>出典：全国農業会議所「新規就農者の就農実態に関する調査結果」ｎ=711</p></a>
                </ModalContent>
              </div>
            </div>
          
      
          <div id={"test2"}>
            <div className={styles.h2}>
              <h2>こんな人材を育てたい！</h2>
            </div>
            <div className={styles.box2}>
              <p className={styles.text}>農家の現状を知り、技術やマンパワーで貢献したいと思うような農業に関心を持った人材を育てる。</p>
            </div>
          </div>
      
          <div id={"test3"}>
            <div className={styles.h2}>
              <h2>そのためのプログラム</h2>
            </div>
            
            <div className={styles.box3}>
              <p className={styles.text}>
                ・小中学校等の学校教育で農業を体験する機会を作り、農業に興味・関心を持ってもらう。<br/>
              </p>
              <ModalContent image={"https://www.maff.go.jp/j/nousin/sekkei/midori/m_manabi/taiken/img/einou1.jpg"}
                            modalIsOpen={modalIsOpen3}
                            setIsOpen={setIsOpen3}>
                <a href={"https://www.maff.go.jp/j/nousin/sekkei/midori/m_manabi/taiken/index.html"}><p>出典：農林水産省</p></a>
              </ModalContent>
            </div>
            
            <div className={styles.box3}>
              <p className={styles.text}>
                ・都心部などで農業体験が難しい場合、動画や資料などで農業従事者からノウハウを聞き、同様の体験を行う。
              </p>
              <ModalContent image={"https://www.maff.go.jp/j/nousin/sekkei/midori/m_manabi/taiken/img/jyugyou2.jpg"}
                            modalIsOpen={modalIsOpen4}
                            setIsOpen={setIsOpen4}>
                <a href={"https://www.maff.go.jp/j/nousin/sekkei/midori/m_manabi/taiken/index.html"}><p>出典：農林水産省</p></a>
              </ModalContent>
            </div>
      
          </div>
          <div id={"test4"}>
            <div className={styles.h2}>
              <h2>その人材が今後どのような未来を作るか？</h2>
            </div>
            <div className={styles.box4}>
              <p className={styles.text}>
                農家になったり農家の手助けになる研究開発を行い、農業全体の高齢化・縮小化の問題を解決した未来
              </p>
              {/*<img alt={"かっこいい画像"}/>*/}
            </div>
          </div>
          <span className={styles.pageTop} onClick={scroll.scrollToTop}>
            <i className={"material-symbols-outlined"}>arrow_upward</i>
          </span>
        </main>
    </div>
  );
}

export default App;
