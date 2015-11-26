/* globals Polymer */
'use strict';

/**
`<xui-checkbox></checkbox>` inserts a customized button into your page.

Just put an `<xui-checkbox></checkbox>` anywhere inside your body.

You can also customize it, by adding these attributes:

 - name - the name of the checkbox.

 - icon - icon link to specify an icon beside the checkbox.

 - iconheight - icon height.

 - iconwidth - icon width.

 - disabled - to make the checkbox disabled.

 - checked - to make the checkbox checked by default.

 - value - default value of the checkbox.

 - label - specify the text label of the checkbox.

Example: 

    `<xui-checkbox label="Checkbox with icon" icon="http://m.hiapphere.com/data/icon/201409/HiAppHere_com_kov.theme.lumos.png" iconwidth="20" iconheight="20" checked disabled></xui-checkbox>`

@demo .../../demos/xui-theme-xbc/components/xui-checkbox.html  A Cool Demo.
@demo .../../demos/xui-checkbox/demo.html  Another Demo.

*/
Polymer({
  is: 'xui-checkbox',
  properties: {

    /** Label text of checkbox */
    label: {
      type: String,
      value: '',
      reflectToAttribute: true
    },

    /** Checkbox default value */
    value: {
      type: String,
      value: '',
      reflectToAttribute: true
    },

    /** Checks/unchecks the checkbox */
    checked: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    },

    /** Disables/enables the checkbox */
    disabled: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    },

    /** Checkbox's icon */
    icon: {
      type: String,
      reflectToAttribute: true
    },

    /** Checkbox's icon height */
    iconheight: {
      type: Number,
      reflectToAttribute: true
    },

    /** Checkbox's icon width */
    iconwidth: {
      type: Number,
      reflectToAttribute: true
    },

    /** Chckbox's name */
    name: {
      type: String,
      reflectToAttribute: true
    }

  },

  /** 

  This function wasn't/isn't used yet.

  sets/removes the `check` attribute.

  */
  checkedChanged: function()
  {
    this.checked ? 
        this.$.check.setAttribute('checked', true) : 
        this.$.check.removeAttribute('checked');
  },

  /** 

  This function wasn't/isn't used yet.

  sets/removes the `disabled` attribute.

  */
  disabledChanged: function()
  {
    this.disabled ?
        this.$.check.setAttribute('disabled', true) :
        this.$.check.removeAttribute('disabled');
  }
});