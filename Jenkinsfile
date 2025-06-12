pipeline {
  agent any

  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run Cypress Tests') {
      steps {
        sh 'npm run test:report'
      }
    }
    stage('Publish HTML Report') {
      steps {
        publishHTML([
          reportDir: 'cypress/reports',
          reportFiles: 'report.html',
          reportName: 'Cypress Test Report'
        ])
      }
    }
    stage('Archive Test Report') {
      steps {
        archiveArtifacts artifacts: 'cypress/reports/report.html', fingerprint: true
      }
    }
  }

  post {
    always {
      echo 'Cypress tests completed. Report is archived.'
    }
  }
}