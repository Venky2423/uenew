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
  const fileNamesPanel = globals.form.panelcontainer1738821085880.panelcontainer_6212191381738821333228.imagepanel.panelcontainer1739253353968.uploadDataPanel;
  const files = globals.field.$value;
  if (fileNamesPanel.$value.length > 1) {
    fileNamesPanel.$value.forEach(() => {
      globals.functions.dispatchEvent(fileNamesPanel, 'removeItem');
    });
  }
  // show the metadata panel only if files are attached
  if (files.length > 0) {
    globals.functions.setProperty(fileNamesPanel.$parent, { visible: true });
  } else {
    globals.functions.setProperty(fileNamesPanel.$parent, { visible: false });
  }
  files.forEach((file, index) => {
    if (index !== 0) {
      globals.functions.dispatchEvent(fileNamesPanel, 'addItem');
    }
  });

  files.forEach((file, index) => {
    setTimeout(() => {
      globals.functions.setProperty(fileNamesPanel[index].originalName, file?.name);
    }, 100); // TODO: remove this set timeout
    // tried with
  });
}

// eslint-disable-next-line import/prefer-default-export
export { getFullName, days, populateFileUploadData };
