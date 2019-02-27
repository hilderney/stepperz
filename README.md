# stepperz
Controlador de passos com display de conteúdo por etapas

<div class="stepper-wrapper">

        <!-- Stepper Navigation -->
        <div class="stepper-navigation" role="tab">
            <div class="stepper-group stepper-group-justified">

                <!-- Stepper Navigation Item -->
                <div class="stepper-group-item" data-tab="panel-formulario" role="tablist">
                    <button id="" class="stepper btn-step btn-active">
                        <div class="stepper-ripple">
                            <div class="stepper-content">
                                <div class="stepper-icon"> 
                                    <span>1</span> 
                                </div>
                                <div class="stepper-text">
                                    <span class="stepper-label"> Título 1 </span>
                                    <span class="stepper-description"> Subtitulo 1 </span>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
                
                <!-- Stepper Navigation Item -->
                <div class="stepper-group-item" data-tab="panel-pagamento" role="tablist">
                    <button id="" class="stepper btn-step disabled">
                        <div class="stepper-ripple">
                            <div class="stepper-content">
                                <div class="stepper-icon"> <span>2</span> </div>
                                <div class="stepper-text">
                                    <span class="stepper-label"> Titulo 2 </span>
                                    <span class="stepper-description"> Subtitulo 2</span>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
                
                <!-- Stepper Navigation Item -->
                <div class="stepper-group-item" data-tab="panel-confirmacao" role="tablist">
                    <button id="" class="stepper btn-step disabled">
                        <div class="stepper-ripple">
                            <div class="stepper-content">
                                <div class="stepper-icon"> <span>3</span> </div>
                                <div class="stepper-text">
                                    <span class="stepper-label"> Titulo 3 </span>
                                    <span class="stepper-description"> Subtitulo</span>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
                
            </div>
        </div>

        <!-- Stepper Content -->
        <div class="stepper-container-wrapper">
            <div class="stepper-container" style="transform: translate3d(0%, 0px, 0px);">
                
                <!-- Stepper Content Item -->
                <div role="tabpanel" class="step-pane active">
                    <h1>Pagina 1</h1>
                </div>

                <!-- Stepper Content Item -->
                <div role="tabpanel" class="step-pane">
                    <h1>Pagina 2</h1>
                </div>

                <!-- Stepper Content Item -->
                <div role="tabpanel" class="step-pane">
                    <h1>Pagina 3</h1>
                </div>

            </div>
        </div>

        <div class="stepper-buttons">
            <button class="btn step-prev disabled" >Retornar</button>
            <button class="btn step-next">Avançar</button>
            <button class="btn step-end hidden">Finalizar</button>
        </div>

    </div>
