import React from 'react';
import {Power} from './power';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export class SidebarExample extends React.Component {
  render(){
    // Each logical "route" has two components, one for
    // the sidebar and one for the main area. We want to
    // render both of them in different places when the
    // path matches the current URL.
    const routes = [
      { path: '/basic-calculator',
        main: () => <div><h2>Basic Calculator</h2> <Power/></div>
      },
      { path: '/scientific-calculator',
        main: () => <h2>Scientific Calculator</h2>
      },
      { path: '/resistor',
        main: () => <h2>Resistor</h2>
      },
      { path: '/capacitor',
        main: () => <h2>Capacitor</h2>
      },
      { path: '/Inductor',
        main: () => <h2>Inductor</h2>
      },
      { path: '/power-dissipation',
        main: () => <h2>Power Dissipation</h2>
      },
      { path: '/rlc-calculator',
        main: () => <h2>RLC Calculator</h2>
      },
      { path: '/turns-ratio',
        main: () => <h2>Turns Ratio</h2>
      },
      { path: '/power-factor',
        main: () => <h2>Power Factor</h2>
      },
      { path: '/output-voltage',
        main: () => <h2>Output Voltage</h2>
      },
      { path: '/resistors',
        main: () => <h2>Resistors</h2>
      },
      { path: '/area',
        main: () => <h2>Area</h2>
      },
      { path: '/energy',
        main: () => <h2>Energy</h2>
      },
      { path: '/force',
        main: () => <h2>Force</h2>
      },
      { path: '/length',
        main: () => <h2>Length</h2>
      },
      { path: '/light',
        main: () => <h2>Light</h2>
      },
      { path: '/mass',
        main: () => <h2>Mass</h2>
      },
      { path: '/power',
        main: () => <h2>Power</h2>
      },
      { path: '/pressure',
        main: () => <h2>Pressure</h2>
      },
      { path: '/speed',
        main: () => <h2>Speed</h2>
      },
      { path: '/temp',
        main: () => <h2>Temp</h2>
      },
      { path: '/time',
        main: () => <h2>Time</h2>
      },
      { path: '/volume',
        main: () => <h2>Volume</h2>
      }
    ]
    return (
      <Router>
        <div style={{ display: 'flex' }}>
          <div style={{
            padding: '10px',
            width: '40%',
            background: '#f0f0f0'
          }}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><Link to="/basic-calculator">Basic Calculator</Link></li>
              <li><Link to="/scientific-calculator">Scientific Calculator</Link></li>
              <li><Link to="/resistor">Resistor</Link></li>
            </ul>

          </div>

          <div style={{ flex: 1, padding: '10px' }}>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                component={route.main}
              />
            ))}
          </div>
        </div>
      </Router>
    );
  }
}
