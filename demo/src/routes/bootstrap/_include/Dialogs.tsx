export function Dialogs() {
  return (
    <div className='bs-docs-section'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='page-header'>
            <h1 id='dialogs'>Dialogs</h1>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-6'>
          <h2>Modals</h2>
          <div className='bs-component'>
            <div className='modal'>
              <div className='modal-dialog' role='document'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h5 className='modal-title'>Modal title</h5>
                    <button
                      type='button'
                      className='btn-close'
                      data-bs-dismiss='modal'
                      aria-label='Close'
                    >
                      <span aria-hidden='true'></span>
                    </button>
                  </div>
                  <div className='modal-body'>
                    <p>Modal body text goes here.</p>
                  </div>
                  <div className='modal-footer'>
                    <button type='button' className='btn btn-primary'>
                      Save changes
                    </button>
                    <button
                      type='button'
                      className='btn btn-secondary'
                      data-bs-dismiss='modal'
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2>Offcanvas</h2>
          <div className='bs-component'>
            <a
              className='btn btn-primary'
              data-bs-toggle='offcanvas'
              href='#offcanvasExample'
              role='button'
              aria-controls='offcanvasExample'
            >
              Link with href
            </a>
            <button
              className='btn btn-primary'
              type='button'
              data-bs-toggle='offcanvas'
              data-bs-target='#offcanvasExample'
              aria-controls='offcanvasExample'
            >
              Button with data-bs-target
            </button>

            <div
              className='offcanvas offcanvas-start'
              tabindex='-1'
              id='offcanvasExample'
              aria-labelledby='offcanvasExampleLabel'
            >
              <div className='offcanvas-header'>
                <h5 className='offcanvas-title' id='offcanvasExampleLabel'>
                  Offcanvas
                </h5>
                <button
                  type='button'
                  className='btn-close text-reset'
                  data-bs-dismiss='offcanvas'
                  aria-label='Close'
                ></button>
              </div>
              <div className='offcanvas-body'>
                <div>
                  Some text as placeholder. In real life you can have the
                  elements you have chosen. Like, text, images, lists, etc.
                </div>
                <div className='dropdown mt-3'>
                  <button
                    className='btn btn-secondary dropdown-toggle'
                    type='button'
                    id='dropdownMenuButton'
                    data-bs-toggle='dropdown'
                  >
                    Dropdown button
                  </button>
                  <ul
                    className='dropdown-menu'
                    aria-labelledby='dropdownMenuButton'
                  >
                    <li>
                      <a className='dropdown-item' href='#'>
                        Action
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <h2>Popovers</h2>
          <div className='bs-component mb-5'>
            <button
              type='button'
              className='btn btn-secondary'
              title='Popover Title'
              data-bs-container='body'
              data-bs-toggle='popover'
              data-bs-placement='left'
              data-bs-content='Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'
            >
              Left
            </button>

            <button
              type='button'
              className='btn btn-secondary'
              title='Popover Title'
              data-bs-container='body'
              data-bs-toggle='popover'
              data-bs-placement='top'
              data-bs-content='Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'
            >
              Top
            </button>

            <button
              type='button'
              className='btn btn-secondary'
              title='Popover Title'
              data-bs-container='body'
              data-bs-toggle='popover'
              data-bs-placement='bottom'
              data-bs-content='Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'
            >
              Bottom
            </button>

            <button
              type='button'
              className='btn btn-secondary'
              title='Popover Title'
              data-bs-container='body'
              data-bs-toggle='popover'
              data-bs-placement='right'
              data-bs-content='Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'
            >
              Right
            </button>
          </div>
          <h2>Tooltips</h2>
          <div className='bs-component mb-5'>
            <button
              type='button'
              className='btn btn-secondary'
              data-bs-toggle='tooltip'
              data-bs-placement='left'
              title='Tooltip on left'
            >
              Left
            </button>

            <button
              type='button'
              className='btn btn-secondary'
              data-bs-toggle='tooltip'
              data-bs-placement='top'
              title='Tooltip on top'
            >
              Top
            </button>

            <button
              type='button'
              className='btn btn-secondary'
              data-bs-toggle='tooltip'
              data-bs-placement='bottom'
              title='Tooltip on bottom'
            >
              Bottom
            </button>

            <button
              type='button'
              className='btn btn-secondary'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
              title='Tooltip on right'
            >
              Right
            </button>
          </div>
          <h2>Toasts</h2>
          <div className='bs-component'>
            <div
              className='toast show'
              role='alert'
              aria-live='assertive'
              aria-atomic='true'
            >
              <div className='toast-header'>
                <strong className='me-auto'>Bootstrap</strong>
                <small>11 mins ago</small>
                <button
                  type='button'
                  className='btn-close ms-2 mb-1'
                  data-bs-dismiss='toast'
                  aria-label='Close'
                >
                  <span aria-hidden='true'></span>
                </button>
              </div>
              <div className='toast-body'>
                Hello, world! This is a toast message.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
