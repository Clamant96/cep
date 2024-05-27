pipeline {
    agent any

    stages {
        stage('Instalar Docker') {
            steps {
                script {
                    if (isUnix()) {
                        // Detectar o sistema operacional e instalar Docker
                        sh '''
                            #!/bin/bash
                            set -e

                            if [ -f /etc/os-release ]; then
                                . /etc/os-release
                                OS=$NAME
                                VER=$VERSION_ID
                            fi

                            if [ "$OS" = "Ubuntu" ]; then
                                sudo apt-get update
                                sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
                                curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
                                sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
                                sudo apt-get update
                                sudo apt-get install -y docker-ce
                            elif [ "$OS" = "CentOS Linux" ]; then
                                sudo yum install -y yum-utils
                                sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
                                sudo yum install -y docker-ce
                                sudo systemctl start docker
                                sudo systemctl enable docker
                            else
                                echo "Sistema operacional não suportado"
                                exit 1
                            fi

                            sudo usermod -aG docker $USER
                            sudo systemctl start docker
                            sudo systemctl enable docker
                        '''
                    } else {
                        error 'Este script só suporta sistemas Unix'
                    }
                }
            }
        }
        stage('Verificar Instalação Docker') {
            steps {
                script {
                    sh 'docker --version'
                }
            }
        }
    }
}
