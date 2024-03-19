import React from 'react'
import './user-homepage.css'

const Group6 = (props) => {
  // Define your Group6 component here
  return (
    <div className={props.rootClassName}>
      {/* Your Group6 component content */}
    </div>
  );
}

const UserHomepage = (props) => {
  return (
    <div className="user-homepage-container">
      <div className="user-homepage-frame33">
        <div className="user-homepage-container1">
          <div className="user-homepage-container2">
            <input
              type="checkbox"
              checked="true"
              className="user-homepage-checkbox"
            />
            <input
              type="checkbox"
              checked="true"
              className="user-homepage-checkbox1"
            />
            <input
              type="checkbox"
              checked="true"
              className="user-homepage-checkbox2"
            />
            <input
              type="checkbox"
              checked="true"
              className="user-homepage-checkbox3"
            />
            <input
              type="checkbox"
              checked="true"
              className="user-homepage-checkbox4"
            />
            <input
              type="checkbox"
              checked="true"
              className="user-homepage-checkbox5"
            />
          </div>
          <div className="user-homepage-frame30">
            <span className="user-homepage-text">
              <span className="user-homepage-text01">
                Welcome back Heather! It looks like we have some work to do.
                Lets get started on these urgent tasks to get your
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="user-homepage-text02">
                <span>
                  sick
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span></span>
              </span>
              <span>beats noticed!</span>
            </span>
            <Group6 rootClassName="group6-root-class-name"></Group6>
            <div className="user-homepage-group4">
              <div className="user-homepage-group1"></div>
            </div>
          </div>
        </div>
        <button className="user-homepage-buttonprimary">
          <span className="user-homepage-text07">
            <span>Completed All Tasks</span>
          </span>
        </button>
      </div>
      <div className="user-homepage-frame331">
        <div className="user-homepage-frame301">
          <span className="user-homepage-text09">
            <span className="user-homepage-text10">
              Welcome back Heather! It looks like we have some work to do. Let’s
              get started on these urgent tasks to get your
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="user-homepage-text11">
              <span>
                sick
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span></span>
            </span>
            <span>beats noticed!</span>
          </span>
          <div className="user-homepage-group41">
            <div className="user-homepage-group11"></div>
          </div>
          <Group6 rootClassName="group6-root-class-name1"></Group6>
        </div>
        <button className="user-homepage-buttonprimary1">
          <span className="user-homepage-text16">
            <span>Completed All Tasks</span>
          </span>
        </button>
        <input
          type="checkbox"
          checked="true"
          className="user-homepage-checkbox6"
        />
        <input
          type="checkbox"
          checked="true"
          className="user-homepage-checkbox7"
        />
      </div>
    </div>
  )
}

export default UserHomepage;
