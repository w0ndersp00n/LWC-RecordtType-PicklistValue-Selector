/**
 * Component to allow front-end picklist value selection, restricted by a RecordType for that Picklist Field
 * Component uses lightning-record-edit-form, which performs a UI-API callout
 *
 * @author      Reinier van den Assum (rvandenassum@deloitte.nl)
 * @created     June 2020
 */
import { LightningElement, api } from "lwc";

export default class RecordType_PicklistValues extends LightningElement {
  /* Required Attributes */
  // {String} API Name of Object
  @api objectName;
  // {String} API Name of Picklist value (for this specific Object)
  @api controllingFieldName;
  // {String} API Name of Picklist value (for this specific Object)
  @api dependentFieldName;
  // {String} Id of RecordType the picklist values should be restricted with
  @api recordTypeId;

  /* Optional Attributes */
  // {Boolean} Whether or not the input is required
  @api isRequired;
  // {String} Error message non selected
  @api errorMessage;

  /* Output Attributes */
  // {String} API value of selected picklist value (not the label, but the value)
  @api controllingFieldValue;
  /* Output Attributes */
  // {String} API value of selected picklist value (not the label, but the value)
  @api dependentFieldValue;

  // {Validation} Function Lightning Flows execute on 'next'-button to validate whether component is valid
  @api validate() {
    if (
      !this.isRequired ||
      (this.isRequired &&
        this.controllingFieldValue &&
        this.fieldValue.length > 0)
    ) {
      return { isValid: true };
    } else {
      return {
        isValid: false,
        errorMessage: this.errorMessage,
      };
    }
  }

  /**
   * Function to handle the picklist selection and assign to the fieldValue variable
   */
  handleControllingFieldChange(event) {
    this.controllingFieldValue = event.target.value;
  }

  /**
   * Function to handle the picklist selection and assign to the fieldValue variable
   */
  handleDependentFieldChange(event) {
    this.dependentFieldValue = event.target.value;
  }
}
