pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'cep'
        DOCKER_TAG = 'latest'
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
                    docker.build("${env.DOCKER_IMAGE}:${env.DOCKER_TAG}")
                }
            }
        }
        
        stage('Run') {
            steps {
                script {
                    // Parar e remover contêiner antigo, se existir
                    def container = docker.ps().find { it.names.contains('cep') }
                    if (container) {
                        docker.stop(container.id)
                        docker.rm(container.id)
                    }
                    
                    // Executar novo contêiner
                    docker.run("${env.DOCKER_IMAGE}:${env.DOCKER_TAG}", '-d -p 80:80 --name cep')
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finalizado'
        }
        success {
            echo 'Aplicação iniciada com sucesso'
        }
        failure {
            echo 'Falha na pipeline'
        }
    }
}
