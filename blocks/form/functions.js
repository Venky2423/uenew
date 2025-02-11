/**
 * Get Full Name
 * @name getFullName Concats first name and last name
 * @param {string} firstname in Stringformat
 * @param {string} lastname in Stringformat
 * @return {string}
 */
function getFullName(firstname, lastname) {
  return `${firstname} ${lastname}`.trim();
}

/**
 * Calculate the number of days between two dates.
 * @param {*} endDate
 * @param {*} startDate
 * @returns {number} returns the number of days between two dates
 */
function days(endDate, startDate) {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate;

  // return zero if dates are valid
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return 0;
  }

  const diffInMs = Math.abs(end.getTime() - start.getTime());
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
}

/**
 * populates the uploaded file data into a repeatable panel instance
 * @param {object} globals
 * @returns {string}
 */

/**
 * populates the uploaded file data into a repeatable panel instance
 * @name populateFileUploadData
 * @param {scope} globals
 */
function populateFileUploadData(globals) {
  const fileUploadPanelQName = '$form.panelcontainer1738821085880.panelcontainer_6212191381738821333228.imagepanel.panelcontainer1739253353968.uploadDataPanel';
}

// eslint-disable-next-line import/prefer-default-export
export { getFullName, days, populateFileUploadData };
