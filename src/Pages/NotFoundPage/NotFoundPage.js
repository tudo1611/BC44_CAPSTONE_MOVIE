import React from "react";
import "./NotFound.css";
export default function NotFoundPage() {
  return (
    <div>
      <div>
        {/* about */}
        <div className="about">
          <a
            className="bg_links social portfolio"
            href="https://www.rafaelalucas.com"
            target="_blank"
          >
            <span className="icon" />
          </a>
          <a
            className="bg_links social dribbble"
            href="https://dribbble.com/rafaelalucas"
            target="_blank"
          >
            <span className="icon" />
          </a>
          <a
            className="bg_links social linkedin"
            href="https://www.linkedin.com/in/rafaelalucas/"
            target="_blank"
          >
            <span className="icon" />
          </a>
          <a className="bg_links logo" />
        </div>
        {/* end about */}
        <nav>
          <div className="menu">
            <p className="website_name">LOGO</p>
            <div className="menu_links">
              <a href className="link">
                about
              </a>
              <a href className="link">
                projects
              </a>
              <a href className="link">
                contacts
              </a>
            </div>
            <div className="menu_icon">
              <span className="icon" />
            </div>
          </div>
        </nav>
        <section className="wrapper">
          <div className="container">
            <div id="scene" className="scene" data-hover-only="false">
              <div className="circle" data-depth="1.2" />
              <div className="one" data-depth="0.9">
                <div className="content">
                  <span className="piece" />
                  <span className="piece" />
                  <span className="piece" />
                </div>
              </div>
              <div className="two" data-depth="0.60">
                <div className="content">
                  <span className="piece" />
                  <span className="piece" />
                  <span className="piece" />
                </div>
              </div>
              <div className="three" data-depth="0.40">
                <div className="content">
                  <span className="piece" />
                  <span className="piece" />
                  <span className="piece" />
                </div>
              </div>
              <p className="p404" data-depth="0.50">
                404
              </p>
              <p className="p404" data-depth="0.10">
                404
              </p>
            </div>
            <div className="text">
              <article>
                <p>
                  Uh oh! Looks like you got lost. <br />
                  Go back to the homepage if you dare!
                </p>
                <button>i dare!</button>
              </article>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
