module.exports = {
  employerDashboard: (req, res) => {
      res.render('Pages/employer-dashboard', { pageName: 'Employer Dashboard' });
  },

  employerProfile : (req, res) => {
      res.render('Pages/employer-profile-page', { pageName: 'Profile'});
    },

  employerCreateProfile: (req, res) => {
    res.render('Pages/employer-profile-creation', { pageName: 'Create Profile'});
  },

  employerDashboardSettings: (req, res) => {
    res.render('Pages/employer-dash-settings.ejs', { pageName: 'Employer Dashboard - Settings' });
  },

  employerDashboardSupport: (req, res) => {
    res.render('Pages/employer-dash-support', { pageName: 'Employer Dashboard' });
  },

  employerEmployeeGallery: (req, res) => {
    res.render('Pages/employer-employees-gallery', { pageName: 'Employee Gallery' });
  }
}