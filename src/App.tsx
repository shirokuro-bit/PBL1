import type { Component } from 'solid-js';

import styles from './App.module.css';
import Header from './components/header'
import HorizontalRule from "./components/hr";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Header/>
      <HorizontalRule/>
      <main>
        <div>
          <h2>あらまし</h2>
          <p>
            第一次産業である農業に着目<br/>
            農業は高齢化が顕著に進んでいる。新規の若い農家が減少している。(基幹的農業従事者数の推移の資料表示)<br/>
            縮小していく農家、でも我々の生活には必須。<br/>
            {/*<img src={"https://d1obh0a64dzipo.cloudfront.net/images/5856.jpg"}/>*/}
            農業全体に若い人に関心を持ってもらいたい。<br/>
            でも、身近に農家がなければ関心を持つ切っ掛けがない。<br/>
            農業は泥臭い、肉体労働の過酷さ等、負のイメージが強く若者が積極的になりたいと思わない。<br/>
            切っ掛けの為になればいいと、このようなプロジェクトを考えています。<br/>
          </p>
        </div>
        <div>
          <h2>こんな人材を育てたい！</h2>
          <p>農家の現状を知り、技術やマンパワーで貢献したいと思うような農業に関心を持った人材を育てる。</p>
        </div>
        <div>
          <h2>そのためのプログラム</h2>
          <p>
            ・小中学校等の学校教育で農業を体験する機会を作り、農業に興味・関心を持ってもらう。<br/>
            ・都心部などで農業体験が難しい場合、動画や資料などで農業従事者からノウハウを聞き、同様の体験を行う。<br/>
          </p>
        </div>
        <div>
          <h2>その人材が今後どのような未来を作るか？</h2>
          <p>
            農家になったり農家の手助けになる研究開発を行い、農業全体の高齢化・縮小化の問題を解決した未来
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;
