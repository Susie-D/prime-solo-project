import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h2>Our Vision</h2>
        <p>
          We believe in the power of generosity and community. Our vision is to
          foster a sustainable and connected world by making it easy for people
          to give and receive without the exchange of money. By facilitating the
          reuse and redistribution of items, we aim to reduce waste and promote
          environmental stewardship. Additionally, we are dedicated to
          supporting bee conservation efforts, recognizing the crucial role bees
          play in our ecosystem.
        </p>
      </div>
      <h2>How It Works</h2>
      <p>
        At FreeBee Life, everything is straightforward and user-friendly. Users
        can list items they no longer need, making them available for others to
        claim for free. Whether you have clothes, electronics, furniture, or
        books, you can give them a new home with someone who needs them. It's as
        simple as: 1) List Your Items: Snap a photo, write a brief description,
        and post your item on our platform. 2) Browse for Free: Explore a wide
        range of free items listed by other users in your area. 3) Connect and
        Exchange: Contact the lister to arrange a pickup or drop-off. Enjoy the
        benefits of sharing and receiving within your community.
      </p>
      <h2>Supporting the Bees</h2>
      <p>
        At FreeBee Life, we are passionate about giving back to the environment.
        Any donations or proceeds generated through our platform go directly to
        bee conservation projects. By supporting us, you are also contributing
        to the preservation of bee populations, which are essential for
        pollination and maintaining biodiversity.
      </p>
      <h2>Join Us Today</h2>
      <p>
        Be part of a movement that values generosity, sustainability, and
        community. Join FreeBee Life today and start listing or discovering free
        items. Together, we can make a difference—one free item at a time. For
        more information or to start listing your items, visit our
        [website/app].
      </p>
    </div>
  );
}

export default AboutPage;
