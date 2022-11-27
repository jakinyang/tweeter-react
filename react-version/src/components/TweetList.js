import React from "react";

function TweetList() {
  const tweet1 = {
    avatar: "https://i.imgur.com/73hZDYK.png",
    firstName: "Newton",
    lastName: "Isaac",
    handle: "@SirIsaac",
    body: "If I have seen further it is by standing on the shoulders of giants",
    age: "10 days ago",
  }
  const tweet2 = {
    avatar: "https://i.imgur.com/nlhLi3I.png",
    firstName: "Rene",
    lastName: "Decartes",
    handle: "@rd",
    body: "Je pense , donc je suis",
    age: "10 days ago",
  }
  return (
    <section className="tweets">
      <article className="tweet">
        <header className="tweet--header">
          <img className="tweet--avatar" src={tweet1.avatar} />
          <h2 className="tweet--name">{tweet1.firstName}</h2>
          <small className="tweet--handle">{tweet1.handle}</small>
        </header>

        <div className="tweet--body">
          <p>{tweet1.body}</p>
        </div>

        <footer className="tweet--footer">
          <small className="footer--age">{tweet1.age}<small>
            <span className="footer--actions">
              <a href="#"><i className="fa fa-flag"></i></a>
              <a href="#"><i className="fa fa-retweet"></i></a>
              <a href="#"><i className="fa fa-heart"></i></a>'
            </span>
          </small></small></footer>
      </article>
      <article className="tweet">
        <header className="tweet--header">
          <img className="tweet--avatar" src={tweet2.avatar} />
          <h2 className="tweet--name">{tweet2.firstName}</h2>
          <small className="tweet--handle">{tweet2.handle}</small>
        </header>

        <div className="tweet--body">
          <p>{tweet2.body}</p>
        </div>

        <footer className="tweet--footer">
          <small className="footer--age">{tweet2.age}<small>
            <span className="footer--actions">
              <a href="#"><i className="fa fa-flag"></i></a>
              <a href="#"><i className="fa fa-retweet"></i></a>
              <a href="#"><i className="fa fa-heart"></i></a>'
            </span>
          </small></small></footer>
      </article>

    </section>

  );
}

export default TweetList;
