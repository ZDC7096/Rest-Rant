const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <link rel="stylesheet" href="/css/style.css" />
              <div>
                <img src="/images/patrick-eyes.jpg" alt="patrick eyes" />
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
