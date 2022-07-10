import React from 'react';

import './style.css'

import RuneItem from '../../components/RuneItem';

const Home = () => {
  const rune_info = [
    {
      name1: "WHITE",
      name2: "White",
      name3: "white",
      rewards: 0.125,
      tokens: 3,
      img_url: "assets/white_rune.png",
      img_alt: "white_rune"
    },
    {
      name1: "ORANGE",
      name2: "Orange",
      name3: "orange",
      rewards: 0.25,
      tokens: 6,
      img_url: "assets/orange_rune.png",
      img_alt: "orange_rune"
    },
    {
      name1: "GREEN",
      name2: "Green",
      name3: "green",
      rewards: 0.5,
      tokens: 12,
      img_url: "assets/green_rune.png",
      img_alt: "green_rune"
    },
  ]

  const runes = rune_info.map((element, index) => (
    <RuneItem key={index} name1={element.name1} name2={element.name2} name3={element.name3} tokens={element.tokens} rewards={element.rewards} img_url={element.img_url} img_alt={element.img_alt} />
  ))

  const openDApp = () => {
    window.open("/app", "_self");
  }

  return (
    <React.Fragment>
      {/* <Header /> */}
      {/* About */}
      <div className="container" id='about'>
        <div className="row">
          <div className="col-md-6">
            <div style={{ height: '100%' }}>
              <div>
                <p className='fs-2 fw-bold'>Discover <span className='cl-brown'>Endless</span> Possibilities</p>
                <p>Agamotto Finance is a Crypto organization that provides a combination of staking services, and P2E games.  We are also interested in investments in the crypto community. </p>

                <button type='button' className='btn launch-btn fw-bold mt-5' onClick={openDApp}>Launch App</button>
              </div>

              <div>
                <img src="assets/agamotto.gif" alt="logo" className='big-logo' />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-field">
              <div>
                <p className='fw-bold fs-5 cl-brown mb-0 mt-4'>OUR VISION</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim turpis fermentum nisi pellentesque a dolor. Aliquam velit cursus nulla imperdiet tellus.</p>
              </div>

              <div>
                <p className='fw-bold fs-5 cl-brown mb-0 mt-4'>OUR OBJECTIVE</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim turpis fermentum nisi pellentesque a dolor. Aliquam velit cursus nulla imperdiet tellus.</p>
              </div>

              <div>
                <p className='fw-bold fs-5 cl-brown mb-0 mt-4'>INVESTMENTS</p>
                <p>The community members will decide by vote where proceeds will be invested in  from P2E games and the Gas fees .  Upon completion of the vote by the community, the proceeds will be invested in profitable crypto trends i.e NFTs, Metaverse, Privacy tokens, Defi, DAOs  and so on.  As long as they are profitable our highly skilled market analysts will Identify them and present them to the community to decide on whether to invest or not.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Runes */}
      <div className='container text-center' id='runes'>
        <p className='how-works fs-2 mt-5'>How It Works</p>

        <div className="container mt-4">
          <div className="row">
            <div className="col-sm-4 d-flex justify-content-center">
              <div>
                <img src="assets/cart.png" alt="cart" className='ring-img' />
                <p className='mb-0 mt-2 fw-bold fs-5'>Buy <span className='cl-brown fw-bold'>$Agamotto</span></p>
              </div>
            </div>

            <div className="col-sm-4 d-flex justify-content-center">
              <div>
                <img src="assets/runes.png" alt="ring" className='ring-img' />
                <p className='mb-0 mt-2 fw-bold fs-5'>Create a <span className='cl-green fw-bold'>Rune</span></p>
              </div>
            </div>

            <div className="col-sm-4 d-flex justify-content-center">
              <div>
                <img src="assets/reward.png" alt="ring" className='ring-img' />
                <p className='mb-0 mt-2 fw-bold fs-5'>Earn <span className='cl-blue fw-bold'>Rewards</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-5">
          <div className="rune-box">
            {runes}
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div className="container mt-5">
        <div className="d-flex" id='roadmap'>
          <div className="roadmap-text">
            <img src="assets/roadmap_text.png" alt="text" className='roadmap-text-img' />
          </div>

          <div className='roadmap'>
            <div className="row d-flex justify-content-center">
              <img src="assets/roadmap.png" alt="roadmap" className='roadmap-img' />
            </div>
            <div className="row d-flex justify-content-center mb-3">
              <div className="col-sm-3 px-3">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc arcu tellus qcurabitur eget enim.</p>
              </div>
              <div className="col-sm-3 px-3">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc arcu tellus qcurabitur eget enim.</p>
              </div>
              <div className="col-sm-3 px-3">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc arcu tellus qcurabitur eget enim.</p>
              </div>
              <div className="col-sm-3 px-3">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc arcu tellus qcurabitur eget enim.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Play Games */}
      <div className="container play-games my-5" id='playgames'>
        <div className="container d-flex justify-content-center">
          <img src="assets/play_games.png" alt="play_games" className='play-games-img' />
        </div>
        <img src="assets/games.png" alt="games" className='games-img' />
      </div>
    </React.Fragment>
  );
}

export default Home;