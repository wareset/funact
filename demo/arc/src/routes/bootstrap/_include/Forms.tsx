export function Forms() {
  return (
    <div className='bs-docs-section'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='page-header'>
            <h1 id='forms'>Forms</h1>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-lg-6'>
          <div className='bs-component'>
            <form>
              <fieldset>
                <legend>Legend</legend>
                <div className='row'>
                  <label for='staticEmail' className='col-sm-2 col-form-label'>
                    Email
                  </label>
                  <div className='col-sm-10'>
                    <input
                      type='text'
                      readonly
                      className='form-control-plaintext'
                      id='staticEmail'
                      value='email@example.com'
                    />
                  </div>
                </div>
                <div>
                  <label for='exampleInputEmail1' className='form-label mt-4'>
                    Email address
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                    placeholder='Enter email'
                  />
                  <small id='emailHelp' className='form-text text-muted'>
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div>
                  <label
                    for='exampleInputPassword1'
                    className='form-label mt-4'
                  >
                    Password
                  </label>
                  <input
                    type='password'
                    className='form-control'
                    id='exampleInputPassword1'
                    placeholder='Password'
                    autocomplete='off'
                  />
                </div>
                <div>
                  <label for='exampleSelect1' className='form-label mt-4'>
                    Example select
                  </label>
                  <select className='form-select' id='exampleSelect1'>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div>
                  <label for='exampleSelect1' className='form-label mt-4'>
                    Example disabled select
                  </label>
                  <select
                    className='form-select'
                    id='exampleDisabledSelect1'
                    disabled
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div>
                  <label for='exampleSelect2' className='form-label mt-4'>
                    Example multiple select
                  </label>
                  <select multiple className='form-select' id='exampleSelect2'>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div>
                  <label for='exampleTextarea' className='form-label mt-4'>
                    Example textarea
                  </label>
                  <textarea
                    className='form-control'
                    id='exampleTextarea'
                    rows='3'
                  ></textarea>
                </div>
                <div>
                  <label for='formFile' className='form-label mt-4'>
                    Default file input example
                  </label>
                  <input className='form-control' type='file' id='formFile' />
                </div>
                <fieldset>
                  <legend className='mt-4'>Radio buttons</legend>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='optionsRadios'
                      id='optionsRadios1'
                      value='option1'
                      checked
                    />
                    <label className='form-check-label' for='optionsRadios1'>
                      Option one is this and that&mdash;be sure to include why
                      it's great
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='optionsRadios'
                      id='optionsRadios2'
                      value='option2'
                    />
                    <label className='form-check-label' for='optionsRadios2'>
                      Option two can be something else and selecting it will
                      deselect option one
                    </label>
                  </div>
                  <div className='form-check disabled'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='optionsRadios'
                      id='optionsRadios3'
                      value='option3'
                      disabled
                    />
                    <label className='form-check-label' for='optionsRadios3'>
                      Option three is disabled
                    </label>
                  </div>
                </fieldset>
                <fieldset>
                  <legend className='mt-4'>Checkboxes</legend>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='flexCheckDefault'
                    />
                    <label className='form-check-label' for='flexCheckDefault'>
                      Default checkbox
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='flexCheckChecked'
                      checked
                    />
                    <label className='form-check-label' for='flexCheckChecked'>
                      Checked checkbox
                    </label>
                  </div>
                </fieldset>
                <fieldset>
                  <legend className='mt-4'>Switches</legend>
                  <div className='form-check form-switch'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='flexSwitchCheckDefault'
                    />
                    <label
                      className='form-check-label'
                      for='flexSwitchCheckDefault'
                    >
                      Default switch checkbox input
                    </label>
                  </div>
                  <div className='form-check form-switch'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='flexSwitchCheckChecked'
                      checked
                    />
                    <label
                      className='form-check-label'
                      for='flexSwitchCheckChecked'
                    >
                      Checked switch checkbox input
                    </label>
                  </div>
                </fieldset>
                <fieldset>
                  <legend className='mt-4'>Ranges</legend>
                  <label for='customRange1' className='form-label'>
                    Example range
                  </label>
                  <input
                    type='range'
                    className='form-range'
                    id='customRange1'
                  />
                  <label for='disabledRange' className='form-label'>
                    Disabled range
                  </label>
                  <input
                    type='range'
                    className='form-range'
                    id='disabledRange'
                    disabled
                  />
                  <label for='customRange3' className='form-label'>
                    Example range
                  </label>
                  <input
                    type='range'
                    className='form-range'
                    min='0'
                    max='5'
                    step='0.5'
                    id='customRange3'
                  />
                </fieldset>
                <button type='submit' className='btn btn-primary'>
                  Submit
                </button>
              </fieldset>
            </form>
          </div>
        </div>
        <div className='col-lg-4 offset-lg-1'>
          <form className='bs-component'>
            <div>
              <fieldset disabled>
                <label className='form-label' for='disabledInput'>
                  Disabled input
                </label>
                <input
                  className='form-control'
                  id='disabledInput'
                  type='text'
                  placeholder='Disabled input here...'
                  disabled
                />
              </fieldset>
            </div>

            <div>
              <fieldset>
                <label className='form-label mt-4' for='readOnlyInput'>
                  Readonly input
                </label>
                <input
                  className='form-control'
                  id='readOnlyInput'
                  type='text'
                  placeholder='Readonly input here...'
                  readonly
                />
              </fieldset>
            </div>

            <div className='has-success'>
              <label className='form-label mt-4' for='inputValid'>
                Valid input
              </label>
              <input
                type='text'
                value='correct value'
                className='form-control is-valid'
                id='inputValid'
              />
              <div className='valid-feedback'>Success! You've done it.</div>
            </div>

            <div className='has-danger'>
              <label className='form-label mt-4' for='inputInvalid'>
                Invalid input
              </label>
              <input
                type='text'
                value='wrong value'
                className='form-control is-invalid'
                id='inputInvalid'
              />
              <div className='invalid-feedback'>
                Sorry, that username's taken. Try another?
              </div>
            </div>

            <div>
              <label
                className='col-form-label col-form-label-lg mt-4'
                for='inputLarge'
              >
                Large input
              </label>
              <input
                className='form-control form-control-lg'
                type='text'
                placeholder='.form-control-lg'
                id='inputLarge'
              />
            </div>

            <div>
              <label className='col-form-label mt-4' for='inputDefault'>
                Default input
              </label>
              <input
                type='text'
                className='form-control'
                placeholder='Default input'
                id='inputDefault'
              />
            </div>

            <div>
              <label
                className='col-form-label col-form-label-sm mt-4'
                for='inputSmall'
              >
                Small input
              </label>
              <input
                className='form-control form-control-sm'
                type='text'
                placeholder='.form-control-sm'
                id='inputSmall'
              />
            </div>

            <div>
              <label className='form-label mt-4'>Input addons</label>
              <div>
                <div className='input-group mb-3'>
                  <span className='input-group-text'>$</span>
                  <input
                    type='text'
                    className='form-control'
                    aria-label='Amount (to the nearest dollar)'
                  />
                  <span className='input-group-text'>.00</span>
                </div>
                <div className='input-group mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby='button-addon2'
                  />
                  <button
                    className='btn btn-primary'
                    type='button'
                    id='button-addon2'
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>

            <div>
              <label className='form-label mt-4'>Floating labels</label>
              <div className='form-floating mb-3'>
                <input
                  type='email'
                  className='form-control'
                  id='floatingInput'
                  placeholder='name@example.com'
                />
                <label for='floatingInput'>Email address</label>
              </div>
              <div className='form-floating'>
                <input
                  type='password'
                  className='form-control'
                  id='floatingPassword'
                  placeholder='Password'
                  autocomplete='off'
                />
                <label for='floatingPassword'>Password</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
