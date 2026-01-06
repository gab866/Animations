import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [progress, setProgress] = useState(0);
  const [activeAnimation, setActiveAnimation] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Simular carregamento inicial
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  // Simular progresso
  const startProgress = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  // Aplicar animação
  const triggerAnimation = (animationName) => {
    setActiveAnimation('');
    setTimeout(() => {
      setActiveAnimation(animationName);
    }, 10);
  };

  return (
    <div className="container">
      <h1 className="animate__animated animate__bounceInDown">Exemplos de Animações</h1>

      {/* Atividade 1: Formulário */}
      <div className="section animate__animated animate__fadeIn">
        <h2>Atividade 1 - Formulário com Animação</h2>
        
        <form className="form-group" onSubmit={(e) => e.preventDefault()}>
          <div className="input-wrapper animate__animated animate__fadeInLeft">
            <input 
              type="text" 
              className="input-field" 
              placeholder=" "
              id="usuario"
            />
            <label htmlFor="usuario" className="input-label">Usuário</label>
          </div>
          
          <div className="input-wrapper animate__animated animate__fadeInLeft animate__delay-1s">
            <input 
              type="password" 
              className="input-field" 
              placeholder=" "
              id="senha"
            />
            <label htmlFor="senha" className="input-label">Senha</label>
          </div>
          
          <button type="submit" className="submit-btn animate__animated animate__fadeInUp animate__delay-2s">
            Entrar
          </button>
        </form>
      </div>

      {/* Atividade 2: Loaders */}
      <div className="section animate__animated animate__fadeIn">
        <h2>Atividade 2 - Indicadores de Carregamento</h2>
        
        <h3>Exercício 1 - Spinner</h3>
        <div className="loader-container animate__animated animate__zoomIn animate__fast">
          <div className="spinner-loader"></div>
          <span className="loader-label">Carregando...</span>
        </div>

        <h3>Exercício 2 - Pulse</h3>
        <div className="loader-container animate__animated animate__fadeInDown">
          <div className="pulse-loader"></div>
          <span className="loader-label">Processando...</span>
        </div>

        <h3>Exercício 3 - Pontos</h3>
        <div className="loader-container animate__animated animate__fadeInLeft animate__slow">
          <div className="dots-loader">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <span className="loader-label">Aguarde...</span>
        </div>

        <h3>Exercício 4 - Barras</h3>
        <div className="loader-container animate__animated animate__fadeInRight">
          <div className="bars-loader">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <span className="loader-label">Sincronizando...</span>
        </div>
      </div>

      {/* Atividade 3: Barra de Progresso */}
      <div className="section animate__animated animate__fadeIn">
        <h2>Atividade 3 - Barra de Progresso</h2>
        
        <div className="progress-wrapper animate__animated animate__slideInLeft">
          <div className="progress-container">
            <div 
              className="progress-bar" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="progress-text">{progress}% Completo</p>
        </div>
        
        <button className="btn animate__animated animate__bounceIn" onClick={startProgress}>
          Iniciar Progresso
        </button>
      </div>

      {/* Atividade 4: Skeleton Loading */}
      <div className="section animate__animated animate__fadeIn">
        <h2>Atividade 4 - Skeleton Loading</h2>
        
        {isLoading ? (
          <div className="skeleton-card animate__animated animate__fadeIn">
            <div className="skeleton-header">
              <div className="skeleton skeleton-avatar animate__animated animate__pulse animate__infinite"></div>
              <div className="skeleton-info">
                <div className="skeleton skeleton-title"></div>
                <div className="skeleton skeleton-subtitle"></div>
              </div>
            </div>
            <div className="skeleton-content">
              <div className="skeleton skeleton-line"></div>
              <div className="skeleton skeleton-line"></div>
              <div className="skeleton skeleton-line"></div>
            </div>
          </div>
        ) : (
          <div className="skeleton-card animate__animated animate__fadeIn">
            <div className="skeleton-header">
              <div className="avatar animate__animated animate__zoomIn"></div>
              <div className="skeleton-info">
                <h3 style={{ margin: 0, fontSize: '16px' }}>Gabriel Silveira</h3>
                <p style={{ margin: 0, fontSize: '14px', color: '#999' }}>@gabriel</p>
              </div>
            </div>
            <div className="skeleton-content">
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6' }}>
                Este é um exemplo de conteúdo carregado após o skeleton loading.
              
              </p>
            </div>
          </div>
        )}
        
        <button 
          className="btn animate__animated animate__pulse animate__infinite" 
          onClick={() => {
            setIsLoading(true);
            setTimeout(() => setIsLoading(false), 2000);
          }}
        >
          Recarregar
        </button>
      </div>

      {/* Atividade 5: Animate.css */}
      <div className="section">
        <h2>Atividade 5 - Biblioteca Animate.css</h2>
        <p style={{ marginBottom: '30px', color: '#666', fontSize: '15px' }}>
          Clique nos botões para ver as animações
        </p>
        
        {/* Exemplo 1: Classes Utilitárias de Velocidade */}
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ marginBottom: '15px', color: '#555', fontSize: '18px' }}>
            1. Classes Utilitárias - Velocidade
          </h3>
          
          
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              className="btn"
              onClick={(e) => {
                e.currentTarget.classList.add('animate__animated', 'animate__bounce', 'animate__slow');
                setTimeout(() => {
                  e.currentTarget.classList.remove('animate__animated', 'animate__bounce', 'animate__slow');
                }, 2000);
              }}
              style={{ background: '#4CAF50' }}
            >
              Bounce Lento (2s)
            </button>

            <button
              className="btn"
              onClick={(e) => {
                e.currentTarget.classList.add('animate__animated', 'animate__bounce');
                setTimeout(() => {
                  e.currentTarget.classList.remove('animate__animated', 'animate__bounce');
                }, 1000);
              }}
              style={{ background: '#2196F3' }}
            >
              Bounce Normal (1s)
            </button>

            <button
              className="btn"
              onClick={(e) => {
                e.currentTarget.classList.add('animate__animated', 'animate__bounce', 'animate__fast');
                setTimeout(() => {
                  e.currentTarget.classList.remove('animate__animated', 'animate__bounce', 'animate__fast');
                }, 500);
              }}
              style={{ background: '#FF9800' }}
            >
              Bounce Rápido (0.5s)
            </button>
          </div>
        </div>

        {/* Exemplo 2: Classes Utilitárias de Delay */}
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ marginBottom: '15px', color: '#555', fontSize: '18px' }}>
            2. Classes Utilitárias - Delay (Atraso)
          </h3>
         
          
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              className="btn"
              onClick={(e) => {
                e.currentTarget.style.opacity = '0';
                setTimeout(() => {
                  e.currentTarget.classList.add('animate__animated', 'animate__fadeIn');
                  e.currentTarget.style.opacity = '1';
                  setTimeout(() => {
                    e.currentTarget.classList.remove('animate__animated', 'animate__fadeIn');
                  }, 1000);
                }, 10);
              }}
              style={{ background: '#9C27B0' }}
            >
              Sem Delay
            </button>

            <button
              className="btn"
              onClick={(e) => {
                e.currentTarget.style.opacity = '0';
                setTimeout(() => {
                  e.currentTarget.classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-1s');
                  e.currentTarget.style.opacity = '1';
                  setTimeout(() => {
                    e.currentTarget.classList.remove('animate__animated', 'animate__fadeIn', 'animate__delay-1s');
                  }, 2000);
                }, 10);
              }}
              style={{ background: '#673AB7' }}
            >
              Delay 1s
            </button>

            <button
              className="btn"
              onClick={(e) => {
                e.currentTarget.style.opacity = '0';
                setTimeout(() => {
                  e.currentTarget.classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-2s');
                  e.currentTarget.style.opacity = '1';
                  setTimeout(() => {
                    e.currentTarget.classList.remove('animate__animated', 'animate__fadeIn', 'animate__delay-2s');
                  }, 3000);
                }, 10);
              }}
              style={{ background: '#3F51B5' }}
            >
              Delay 2s
            </button>
          </div>
        </div>

        {/* Exemplo 3: Classes Utilitárias de Repetição */}
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ marginBottom: '15px', color: '#555', fontSize: '18px' }}>
            3. Classes Utilitárias - Repetição
          </h3>
          
          
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              className="btn"
              onClick={(e) => {
                e.currentTarget.classList.add('animate__animated', 'animate__flash', 'animate__repeat-2');
                setTimeout(() => {
                  e.currentTarget.classList.remove('animate__animated', 'animate__flash', 'animate__repeat-2');
                }, 2000);
              }}
              style={{ background: '#009688' }}
            >
              Flash 2x
            </button>

            <button
              className="btn"
              onClick={(e) => {
                e.currentTarget.classList.add('animate__animated', 'animate__flash', 'animate__repeat-3');
                setTimeout(() => {
                  e.currentTarget.classList.remove('animate__animated', 'animate__flash', 'animate__repeat-3');
                }, 3000);
              }}
              style={{ background: '#00BCD4' }}
            >
              Flash 3x
            </button>

            <button
              className="btn"
              onClick={(e) => {
                const isInfinite = e.currentTarget.classList.contains('animate__infinite');
                if (isInfinite) {
                  e.currentTarget.classList.remove('animate__animated', 'animate__pulse', 'animate__infinite');
                  e.currentTarget.textContent = 'Pulse Infinito (Clique para iniciar)';
                  e.currentTarget.style.background = '#E91E63';
                } else {
                  e.currentTarget.classList.add('animate__animated', 'animate__pulse', 'animate__infinite');
                  e.currentTarget.textContent = 'Pulse Infinito (Clique para parar)';
                  e.currentTarget.style.background = '#C2185B';
                }
              }}
              style={{ background: '#E91E63' }}
            >
              Pulse Infinito (Clique para iniciar)
            </button>
          </div>
        </div>

        {/* Exemplo 4: Variáveis CSS Personalizadas */}
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ marginBottom: '15px', color: '#555', fontSize: '18px' }}>
            4. Variáveis CSS Personalizadas
          </h3>
          
          
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              className="btn"
              onClick={(e) => {
                e.currentTarget.style.setProperty('--animate-duration', '2s');
                e.currentTarget.classList.add('animate__animated', 'animate__rubberBand');
                setTimeout(() => {
                  e.currentTarget.classList.remove('animate__animated', 'animate__rubberBand');
                }, 2000);
              }}
              style={{ background: '#795548' }}
            >
              RubberBand (2s)
            </button>

            <button
              className="btn"
              onClick={(e) => {
                e.currentTarget.style.setProperty('--animate-duration', '0.8s');
                e.currentTarget.classList.add('animate__animated', 'animate__tada');
                setTimeout(() => {
                  e.currentTarget.classList.remove('animate__animated', 'animate__tada');
                }, 800);
              }}
              style={{ background: '#607D8B' }}
            >
              Tada (0.8s)
            </button>

            <button
              className="btn"
              onClick={(e) => {
                e.currentTarget.style.setProperty('--animate-duration', '1.5s');
                e.currentTarget.classList.add('animate__animated', 'animate__swing');
                setTimeout(() => {
                  e.currentTarget.classList.remove('animate__animated', 'animate__swing');
                }, 1500);
              }}
              style={{ background: '#FF5722' }}
            >
              Swing (1.5s)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
