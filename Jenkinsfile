pipeline {
    agent {
        docker {
            image 'docker:latest'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Clamant96/cep'
            }
        }
        stage('Build') {
            steps {
                script {
                    sh 'docker build -t cep:latest .'
                }
            }
        }
    }
    post {
        always {
            echo 'Pipeline finalizado'
        }
        success {
            echo 'Aplicação subida com sucesso'
        }
        failure {
            echo 'Falha na pipeline'
        }
    }
}