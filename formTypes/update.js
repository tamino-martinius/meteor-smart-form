/* global AutoForm */

AutoForm.addFormType('update', {
  onSubmit: function () {
    var c = this;

    // Prevent browser form submission
    this.event.preventDefault();

    // Make sure we have a model
    var model = this.model;
    if (!model) {
      throw new Error("AutoForm: You must specify a model when form type is update.");
    }

    // Run "before.update" hooks
    this.runBeforeHooks(this.updateDoc, function (modifier) {
      if (_.isEmpty(modifier)) { // make sure this check stays after the before hooks
        // Nothing to update. Just treat it as a successful update.
        c.result(null, 0);
      } else {
        // Perform update
        const doc = model.find({_id: c.docId});
        doc.update(modifier.$set)
        .then(doc => c.result(null, doc.id))
        .catch(doc => c.result(doc.errors));
      }
    });
  },
  usesModifier: true,
  validateForm: function () {
    // Get SimpleSchema
    var ss = AutoForm.getFormSchema(this.form.id);
    // We validate the modifier. We don't want to throw errors about missing required fields, etc.
    return AutoForm._validateFormDoc(this.formDoc, true, this.form.id, ss, this.form);
  },
  shouldPrevalidate: function () {
    // Prevalidate only if there is both a `schema` attribute and a `collection` attribute
    return true;
  }
});
