import React from 'react';
import { Button, Row, Col } from 'antd';
import './App.less';
import fp2 from './img/fp2.jpeg';
import fp3 from './img/fp3.jpeg';
import fp4 from './img/fp4.jpg';
import fp5 from './img/fp5.jpg';
import fp6 from './img/fp6.jpg';
import fp7 from './img/fp7.png';

const App = () => (
  <div className="App">
    <div className="header">
      <h1
        style={{
          position: 'absolute',
          top: '1em',
          left: '1.5em',
          fontSize: '1.5em',
          color: 'white',
        }}
      >
        Pottsepad OÜ
      </h1>
      <h2>Otsid infot kaminate või ahjude kohta?</h2>
      <p style={{ marginTop: '1em' }}>Oleme üle 10a töökogemusega sertifitseeritud pottsepad ning ehitame Sulle parima lahenduse.</p>

      <div className="flex-grid make-space-top">
        <Button size="large" type="secondary" className="flex-col item-hide button-text">Helista</Button>
        <Button size="large" type="primary" className="flex-col button-text">Otsi sobivat</Button>
      </div>
    </div>

    <div style={{ marginTop: '2.5em', paddingLeft: '10%', paddingRight: '10%' }}>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ textAlign: 'center' }}>
          <h2 className="content-heading-2">Vali sobiv küttesüsteem</h2>
        </Col>
      </Row>
    </div>

    <div style={{ marginTop: '1em', paddingLeft: '10%', paddingRight: '10%' }}>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <div style={{ textAlign: 'center' }}>
            <h3 className="content-heading-3">Salvestav</h3>
          </div>
          <div>
            <p className="content-paragraph">
              Soojustsalvestavad kaminad ehk kaminahjud on sellised küttekehad, milles on kokku pandud tavalise kamina ja ahju omadused – seal on kerge küttekolle, mis annab kohe sooja ja mida on kena vaadata ning soojamüür, mis kütab tuba pärast tule kustumist veel pikalt.
          </p>
          </div>
        </Col>

        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <div style={{ textAlign: 'center' }}>
            <h3 className="content-heading-3">Õhkküte</h3>
          </div>
          <div>
            <p className="content-paragraph">Õhkküte võimaldab kaminast tulevat soojust suunata sinna, kus seda on vaja.  Õhkküte vähendab küttekulusid ja ühtlustab soojuse jaotumist erinevates ruumides.</p>
          </div>
          <div>
            <p className="content-paragraph">Süsteem paigaldatakse maja pööningule. Toote valmistamisel ja paigaldamisel jälgitakse, et müratase oleks minimaalne.</p>
          </div>
        </Col>

        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <div style={{ textAlign: 'center' }}>
            <h3 className="content-heading-3">Hübriid</h3>
          </div>
          <div>
            <p className="content-paragraph">Lahendus, mis salvestab soojust ning samas kütab kiirelt soojaks ruumi. Olulist rolli mängib soojamüüri planeerimine - kuum õhk peab õiget trajektoori mööda liikuma, et soojus salvestuks.</p>
          </div>
        </Col>
      </Row>
    </div>

    <div style={{ marginTop: '2.5em', paddingLeft: '10%', paddingRight: '10%' }}>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ textAlign: 'center' }}>
          <h2 className="content-heading-2">Meie tehtud tööd</h2>
        </Col>
      </Row>
    </div>

    <div style={{ marginTop: '1em', width: '100%', textAlign: 'center', paddingLeft: '10%', paddingRight: '10%' }}>
      <div className="row">
        <div className="column">
          <img src={fp2} style={{ width: '100%' }} alt="Fireplace 2" />
          <img src={fp7} style={{ width: '100%' }} alt="Fireplace 7" />
        </div>

        <div className="column">
          <img src={fp4} style={{ width: '100%' }} alt="Fireplace 4" />
          <img src={fp5} style={{ width: '100%' }} alt="Fireplace 5" />
        </div>

        <div className="column">
          <img src={fp6} style={{ width: '100%' }} alt="Fireplace 6" />
          <img src={fp3} style={{ width: '100%' }} alt="Fireplace 3" />
        </div>
      </div>

    </div>

    <footer>
      <p>Pottsepad OÜ, Reg nr 123456, Tel 500000, Sertifikaadi numbrid: A321564897, A321564897</p>
    </footer>
  </div>
);

export default App;
