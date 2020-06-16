/**
 * Component to allow front-end picklist value selection, restricted by a RecordType for that Picklist Field
 * Component uses lightning-record-edit-form, which performs a UI-API callout
 *
 * @author      Reinier van den Assum (rvandenassum@deloitte.nl)
 * @created     June 2020
 */
import { LightningElement, api } from 'lwc';

export default class RecordType_PicklistValues extends LightningElement {
    // {String} API Name of Object
    @api objectName;
    // {String} API Name of Picklist value (for this specific Object)
    @api fieldName;
    // {String} Id of RecordType the picklist values should be restricted with
    @api recordTypeId;

    // {String} API value of selected picklist value (not the label, but the value)
    @api fieldValue;

    // {Validation} Function Lightning Flows execute on 'next'-button to validate whether component is valid
    @api validate() {
        if( this.fieldValue && this.fieldValue.length > 0 ) {
            return { isValid: true };
        } else {
            return {
                isValid: false,
                errorMessage: 'Please select a picklist value' /** Move to custom label */
             };
         }
    }

    /**
     * Function to handle the picklist selection and assign to the fieldValue variable
     */
    handleFieldChange( event ){
        this.fieldValue = event.target.value;
    }
}