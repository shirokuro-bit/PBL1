import type { Component } from 'solid-js';
import { Controller, Scene } from 'react-scrollmagic';

import styles from './App.module.css';
import Header from './components/header'
import HorizontalRule from "./components/hr";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Header/>
      <HorizontalRule/>
      <main>
        <div class={styles.img}>
        
        </div>
        
        <div id={"test1"}>
          <div class={styles.h2}>
            <h2>あらまし</h2>
          </div>
          <div class={styles.box1}>
            <p class={styles.text}>第一次産業である農業に着目</p>
          </div>
          <div class={styles.box1}>
            <p class={styles.text}>
              農業は高齢化が顕著に進み、新規の若い農家が減少している。
            </p>
            <img src={"https://d1obh0a64dzipo.cloudfront.net/images/5856.jpg"}/>
            {/*https://minorasu.basf.co.jp/80466*/}
            {/*画像ポップアップ*/}
          </div>
          <div class={styles.box1}>
            <p class={styles.text}>
              縮小していく農家、しかし我々の生活には必須。
            </p>
          </div>
          <div class={styles.box1}>
            <p class={styles.text}>
              農業全体に対して若い人に関心を持ってもらいたい。<br/>
              {/*でも、身近に農家がなければ関心を持つ切っ掛けがない。<br/>*/}
              {/*農業は泥臭い、肉体労働の過酷さ等、*/}負のイメージが強く若者が積極的になりたいと思わない。<br/>
              {/*切っ掛けの為になればいいと、このようなプロジェクトを考えています。<br/>*/}
              見方が変わるきっかけに！
            </p>
            <img src={"https://www.ryutsu-kenkyusho.co.jp/cms/wp-content/uploads/2015/10/93F182CCE7DD82AA8Ea82E991E61848D86_907D87C.png"}/>
            {/*https://www.ryutsu-kenkyusho.co.jp/columns/%E6%96%B0%E8%A6%8F%E5%B0%B1%E8%BE%B2%E3%81%AE%E8%AA%B2%E9%A1%8C%E3%81%A8%E5%B1%95%E6%9C%9B-%EF%BD%9E%E9%A0%91%E5%BC%B5%E3%82%8C%EF%BC%81%E6%96%B0%E8%A6%8F%E5%B0%B1%E8%BE%B2%E8%80%85%EF%BD%9E/*/}
          </div>
        </div>
        
        <div id={"test2"}>
          <div class={styles.h2}>
            <h2>こんな人材を育てたい！</h2>
          </div>
          <div class={styles.box2}>
            <p class={styles.text}>農家の現状を知り、技術やマンパワーで貢献したいと思うような農業に関心を持った人材を育てる。</p>
          </div>
        </div>
        
        <div id={"test3"}>
          <div class={styles.h2}>
            <h2>そのためのプログラム</h2>
          </div>
          <div class={styles.box3}>
            <p class={styles.text}>
              ・小中学校等の学校教育で農業を体験する機会を作り、農業に興味・関心を持ってもらう。<br/>
              ・都心部などで農業体験が難しい場合、動画や資料などで農業従事者からノウハウを聞き、同様の体験を行う。<br/>
            </p>
          </div>
          
        </div>
        <div id={"test4"}>
          <div class={styles.h2}>
            <h2>その人材が今後どのような未来を作るか？</h2>
          </div>
          <div class={styles.box4}>
            <p class={styles.text}>
              農家になったり農家の手助けになる研究開発を行い、農業全体の高齢化・縮小化の問題を解決した未来
            </p>
            {/*<img alt={"かっこいい画像"}/>*/}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
