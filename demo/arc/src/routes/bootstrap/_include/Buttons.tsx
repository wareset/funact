export function Buttons() {
  return (
    <div className='bs-docs-section'>
      <div className='page-header'>
        <div className='row'>
          <div className='col-lg-12'>
            <h1 id='buttons'>Buttons</h1>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-lg-7'>
          <p className='bs-component'>
            <button type='button' className='btn btn-primary'>
              Primary
            </button>
            <button type='button' className='btn btn-secondary'>
              Secondary
            </button>
            <button type='button' className='btn btn-success'>
              Success
            </button>
            <button type='button' className='btn btn-info'>
              Info
            </button>
            <button type='button' className='btn btn-warning'>
              Warning
            </button>
            <button type='button' className='btn btn-danger'>
              Danger
            </button>
            <button type='button' className='btn btn-light'>
              Light
            </button>
            <button type='button' className='btn btn-dark'>
              Dark
            </button>
            <button type='button' className='btn btn-link'>
              Link
            </button>
          </p>

          <p className='bs-component'>
            <button type='button' className='btn btn-primary disabled'>
              Primary
            </button>
            <button type='button' className='btn btn-secondary disabled'>
              Secondary
            </button>
            <button type='button' className='btn btn-success disabled'>
              Success
            </button>
            <button type='button' className='btn btn-info disabled'>
              Info
            </button>
            <button type='button' className='btn btn-warning disabled'>
              Warning
            </button>
            <button type='button' className='btn btn-danger disabled'>
              Danger
            </button>
            <button type='button' className='btn btn-light disabled'>
              Light
            </button>
            <button type='button' className='btn btn-dark disabled'>
              Dark
            </button>
            <button type='button' className='btn btn-link disabled'>
              Link
            </button>
          </p>

          <p className='bs-component'>
            <button type='button' className='btn btn-outline-primary'>
              Primary
            </button>
            <button type='button' className='btn btn-outline-secondary'>
              Secondary
            </button>
            <button type='button' className='btn btn-outline-success'>
              Success
            </button>
            <button type='button' className='btn btn-outline-info'>
              Info
            </button>
            <button type='button' className='btn btn-outline-warning'>
              Warning
            </button>
            <button type='button' className='btn btn-outline-danger'>
              Danger
            </button>
            <button type='button' className='btn btn-outline-light'>
              Light
            </button>
            <button type='button' className='btn btn-outline-dark'>
              Dark
            </button>
          </p>

          <div className='bs-component'>
            <div
              className='btn-group'
              role='group'
              aria-label='Button group with nested dropdown'
            >
              <button type='button' className='btn btn-primary'>
                Primary
              </button>
              <div className='btn-group' role='group'>
                <button
                  id='btnGroupDrop1'
                  type='button'
                  className='btn btn-primary dropdown-toggle'
                  data-bs-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                ></button>
                <div className='dropdown-menu' aria-labelledby='btnGroupDrop1'>
                  <a className='dropdown-item' href='#'>
                    Dropdown link
                  </a>
                  <a className='dropdown-item' href='#'>
                    Dropdown link
                  </a>
                </div>
              </div>
            </div>

            <div
              className='btn-group'
              role='group'
              aria-label='Button group with nested dropdown'
            >
              <button type='button' className='btn btn-success'>
                Success
              </button>
              <div className='btn-group' role='group'>
                <button
                  id='btnGroupDrop2'
                  type='button'
                  className='btn btn-success dropdown-toggle'
                  data-bs-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                ></button>
                <div className='dropdown-menu' aria-labelledby='btnGroupDrop2'>
                  <a className='dropdown-item' href='#'>
                    Dropdown link
                  </a>
                  <a className='dropdown-item' href='#'>
                    Dropdown link
                  </a>
                </div>
              </div>
            </div>

            <div
              className='btn-group'
              role='group'
              aria-label='Button group with nested dropdown'
            >
              <button type='button' className='btn btn-info'>
                Info
              </button>
              <div className='btn-group' role='group'>
                <button
                  id='btnGroupDrop3'
                  type='button'
                  className='btn btn-info dropdown-toggle'
                  data-bs-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                ></button>
                <div className='dropdown-menu' aria-labelledby='btnGroupDrop3'>
                  <a className='dropdown-item' href='#'>
                    Dropdown link
                  </a>
                  <a className='dropdown-item' href='#'>
                    Dropdown link
                  </a>
                </div>
              </div>
            </div>

            <div
              className='btn-group'
              role='group'
              aria-label='Button group with nested dropdown'
            >
              <button type='button' className='btn btn-danger'>
                Danger
              </button>
              <div className='btn-group' role='group'>
                <button
                  id='btnGroupDrop4'
                  type='button'
                  className='btn btn-danger dropdown-toggle'
                  data-bs-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                ></button>
                <div className='dropdown-menu' aria-labelledby='btnGroupDrop4'>
                  <a className='dropdown-item' href='#'>
                    Dropdown link
                  </a>
                  <a className='dropdown-item' href='#'>
                    Dropdown link
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='bs-component'>
            <button type='button' className='btn btn-primary btn-lg'>
              Large button
            </button>
            <button type='button' className='btn btn-primary'>
              Default button
            </button>
            <button type='button' className='btn btn-primary btn-sm'>
              Small button
            </button>
          </div>
        </div>
        <div className='col-lg-5'>
          <div className='bs-component'>
            <div className='d-grid gap-2'>
              <button className='btn btn-lg btn-primary' type='button'>
                Block button
              </button>
              <button className='btn btn-lg btn-primary' type='button'>
                Block button
              </button>
            </div>
          </div>

          <div className='bs-component mb-3'>
            <div
              className='btn-group'
              role='group'
              aria-label='Basic checkbox toggle button group'
            >
              <input
                type='checkbox'
                className='btn-check'
                id='btncheck1'
                checked
                autocomplete='off'
              />
              <label className='btn btn-primary' for='btncheck1'>
                Checkbox 1
              </label>
              <input
                type='checkbox'
                className='btn-check'
                id='btncheck2'
                autocomplete='off'
              />
              <label className='btn btn-primary' for='btncheck2'>
                Checkbox 2
              </label>
              <input
                type='checkbox'
                className='btn-check'
                id='btncheck3'
                autocomplete='off'
              />
              <label className='btn btn-primary' for='btncheck3'>
                Checkbox 3
              </label>
            </div>
          </div>

          <div className='bs-component mb-3'>
            <div
              className='btn-group'
              role='group'
              aria-label='Basic radio toggle button group'
            >
              <input
                type='radio'
                className='btn-check'
                name='btnradio'
                id='btnradio1'
                autocomplete='off'
                checked
              />
              <label className='btn btn-outline-primary' for='btnradio1'>
                Radio 1
              </label>
              <input
                type='radio'
                className='btn-check'
                name='btnradio'
                id='btnradio2'
                autocomplete='off'
                checked
              />
              <label className='btn btn-outline-primary' for='btnradio2'>
                Radio 2
              </label>
              <input
                type='radio'
                className='btn-check'
                name='btnradio'
                id='btnradio3'
                autocomplete='off'
                checked
              />
              <label className='btn btn-outline-primary' for='btnradio3'>
                Radio 3
              </label>
            </div>
          </div>

          <div className='bs-component'>
            <div className='btn-group-vertical'>
              <button type='button' className='btn btn-primary'>
                Button
              </button>
              <button type='button' className='btn btn-primary'>
                Button
              </button>
              <button type='button' className='btn btn-primary'>
                Button
              </button>
              <button type='button' className='btn btn-primary'>
                Button
              </button>
              <button type='button' className='btn btn-primary'>
                Button
              </button>
              <button type='button' className='btn btn-primary'>
                Button
              </button>
            </div>
          </div>

          <div className='bs-component mb-3'>
            <div className='btn-group' role='group' aria-label='Basic example'>
              <button type='button' className='btn btn-secondary'>
                Left
              </button>
              <button type='button' className='btn btn-secondary'>
                Middle
              </button>
              <button type='button' className='btn btn-secondary'>
                Right
              </button>
            </div>
          </div>

          <div className='bs-component mb-3'>
            <div
              className='btn-toolbar'
              role='toolbar'
              aria-label='Toolbar with button groups'
            >
              <div
                className='btn-group me-2'
                role='group'
                aria-label='First group'
              >
                <button type='button' className='btn btn-secondary'>
                  1
                </button>
                <button type='button' className='btn btn-secondary'>
                  2
                </button>
                <button type='button' className='btn btn-secondary'>
                  3
                </button>
                <button type='button' className='btn btn-secondary'>
                  4
                </button>
              </div>
              <div
                className='btn-group me-2'
                role='group'
                aria-label='Second group'
              >
                <button type='button' className='btn btn-secondary'>
                  5
                </button>
                <button type='button' className='btn btn-secondary'>
                  6
                </button>
                <button type='button' className='btn btn-secondary'>
                  7
                </button>
              </div>
              <div className='btn-group' role='group' aria-label='Third group'>
                <button type='button' className='btn btn-secondary'>
                  8
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
