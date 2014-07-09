//GlobalSequences File
function frProfile_frProfile_init_seq0(eventobject, neworientation) {
    popBlockingScreen.show();
    frProfile.lblUserId.text = globalUserid;
    setSessionForm.call(this, "frProfile");
    var updateProfile_inputparam = {};
    updateProfile_inputparam["serviceID"] = "updateProfile";
    updateProfile_inputparam["httpheaders"] = {};
    updateProfile_inputparam["httpconfig"] = {};
    updateProfile = appmiddlewareinvoker(updateProfile_inputparam, false);
    frProfile.lblDOB.text = updateProfile.dob;
    frProfile.lblDOJ.text = updateProfile.doj;
    frProfile.txtEmailId.text = updateProfile.emailId;
    frProfile.txtFullName.text = updateProfile.fullName;
    frProfile.txtAddress.text = updateProfile.address;
    frProfile.txtAlias.text = updateProfile.alias;
    popBlockingScreen.dismiss();
};