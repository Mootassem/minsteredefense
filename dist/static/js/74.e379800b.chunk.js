(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[74],{539:function(e,a,s){"use strict";s.r(a);a.default={common:{or:"ou",cancel:"Cancelar",reset:"Limpar",save:"Salvar",search:"Buscar",edit:"Editar",remove:"Remover",new:"Novo",export:"Exportar para Excel",noDataToExport:"N\xe3o h\xe1 dados para exportar",import:"Importar",discard:"Descartar",yes:"Sim",no:"N\xe3o",pause:"Pausar",areYouSure:"Tem certeza?",view:"Visualizar",destroy:"Deletar",mustSelectARow:"Selecine uma linha",filters:"Filtros"},app:{title:"Aplica\xe7\xe3o"},api:{menu:"API"},entities:{site:{name:"Site",label:"Sites",menu:"Sites",exporterFileName:"Site_exportados",list:{menu:"Sites",title:"Sites"},create:{success:"Site salvo com sucesso"},update:{success:"Site salvo com sucesso"},destroy:{success:"Site deletado com sucesso"},destroyAll:{success:"Site(s) deletado com sucesso"},edit:{title:"Editar Site"},fields:{id:"Id",nom:"Nom",description:"Description",admin:"Admin",machine:"Machine",attachements:"Attachements",collaborateurs:"Collaborateurs",createdAt:"Criado em",updatedAt:"Atualizado em",createdAtRange:"Criado em"},enumerators:{},placeholders:{},hints:{},new:{title:"Novo Site"},view:{title:"Visualizar Site"},importer:{title:"Importar Sites",fileName:"site_template_importacao",hint:"Arquivos/Imagens devem ser as URLs dos arquivos, separados por espa\xe7o. Relacionamentos devem ser os IDs separados por espa\xe7o."}},machine:{name:"Machine",label:"Machines",menu:"Machines",exporterFileName:"Machine_exportados",list:{menu:"Machines",title:"Machines"},create:{success:"Machine salvo com sucesso"},update:{success:"Machine salvo com sucesso"},destroy:{success:"Machine deletado com sucesso"},destroyAll:{success:"Machine(s) deletado com sucesso"},edit:{title:"Editar Machine"},fields:{id:"Id",titre:"Titre",description:"Description",etat:"Etat",dateRange:"Date",date:"Date",type:"Type",reference:"Reference",operations:"Operations",site:"Site",empruntes:"Empruntes",attachements:"Attachements",image:"Image",createdAt:"Criado em",updatedAt:"Atualizado em",createdAtRange:"Criado em"},enumerators:{etat:{en_panne:"En_panne",en_reparation:"En_reparation",fixe:"Fixe"}},placeholders:{},hints:{},new:{title:"Novo Machine"},view:{title:"Visualizar Machine"},importer:{title:"Importar Machines",fileName:"machine_template_importacao",hint:"Arquivos/Imagens devem ser as URLs dos arquivos, separados por espa\xe7o. Relacionamentos devem ser os IDs separados por espa\xe7o."}},typeMachine:{name:"TypeMachine",label:"TypeMachines",menu:"TypeMachines",exporterFileName:"TypeMachine_exportados",list:{menu:"TypeMachines",title:"TypeMachines"},create:{success:"TypeMachine salvo com sucesso"},update:{success:"TypeMachine salvo com sucesso"},destroy:{success:"TypeMachine deletado com sucesso"},destroyAll:{success:"TypeMachine(s) deletado com sucesso"},edit:{title:"Editar TypeMachine"},fields:{id:"Id",titre:"Titre",typeOperation:"TypeOperation",createdAt:"Criado em",updatedAt:"Atualizado em",createdAtRange:"Criado em"},enumerators:{},placeholders:{},hints:{},new:{title:"Novo TypeMachine"},view:{title:"Visualizar TypeMachine"},importer:{title:"Importar TypeMachines",fileName:"typeMachine_template_importacao",hint:"Arquivos/Imagens devem ser as URLs dos arquivos, separados por espa\xe7o. Relacionamentos devem ser os IDs separados por espa\xe7o."}},operation:{name:"Operation",label:"Operations",menu:"Operations",exporterFileName:"Operation_exportados",list:{menu:"Operations",title:"Operations"},create:{success:"Operation salvo com sucesso"},update:{success:"Operation salvo com sucesso"},destroy:{success:"Operation deletado com sucesso"},destroyAll:{success:"Operation(s) deletado com sucesso"},edit:{title:"Editar Operation"},fields:{id:"Id",titre:"Titre",description:"Description",type:"Type",dateRange:"Date",date:"Date",coutRange:"Cout",cout:"Cout",attachement:"Attachement",createdAt:"Criado em",updatedAt:"Atualizado em",createdAtRange:"Criado em"},enumerators:{},placeholders:{},hints:{},new:{title:"Novo Operation"},view:{title:"Visualizar Operation"},importer:{title:"Importar Operations",fileName:"operation_template_importacao",hint:"Arquivos/Imagens devem ser as URLs dos arquivos, separados por espa\xe7o. Relacionamentos devem ser os IDs separados por espa\xe7o."}},typeOperation:{name:"TypeOperation",label:"TypeOperations",menu:"TypeOperations",exporterFileName:"TypeOperation_exportados",list:{menu:"TypeOperations",title:"TypeOperations"},create:{success:"TypeOperation salvo com sucesso"},update:{success:"TypeOperation salvo com sucesso"},destroy:{success:"TypeOperation deletado com sucesso"},destroyAll:{success:"TypeOperation(s) deletado com sucesso"},edit:{title:"Editar TypeOperation"},fields:{id:"Id",titre:"Titre",description:"Description",createdAt:"Criado em",updatedAt:"Atualizado em",createdAtRange:"Criado em"},enumerators:{},placeholders:{},hints:{},new:{title:"Novo TypeOperation"},view:{title:"Visualizar TypeOperation"},importer:{title:"Importar TypeOperations",fileName:"typeOperation_template_importacao",hint:"Arquivos/Imagens devem ser as URLs dos arquivos, separados por espa\xe7o. Relacionamentos devem ser os IDs separados por espa\xe7o."}},emprunte:{name:"Emprunte",label:"Empruntes",menu:"Empruntes",exporterFileName:"Emprunte_exportados",list:{menu:"Empruntes",title:"Empruntes"},create:{success:"Emprunte salvo com sucesso"},update:{success:"Emprunte salvo com sucesso"},destroy:{success:"Emprunte deletado com sucesso"},destroyAll:{success:"Emprunte(s) deletado com sucesso"},edit:{title:"Editar Emprunte"},fields:{id:"Id",machine:"Machine",siteOrigine:"SiteOrigine",siteDestination:"SiteDestination",dateDebutRange:"DateDebut",dateDebut:"DateDebut",dateFinRange:"DateFin",dateFin:"DateFin",commentaires:"Commentaires",statut:"Statut",createdAt:"Criado em",updatedAt:"Atualizado em",createdAtRange:"Criado em"},enumerators:{statut:{en_attente:"En_attente",valide:"Valide",refuse:"Refuse"}},placeholders:{},hints:{},new:{title:"Novo Emprunte"},view:{title:"Visualizar Emprunte"},importer:{title:"Importar Empruntes",fileName:"emprunte_template_importacao",hint:"Arquivos/Imagens devem ser as URLs dos arquivos, separados por espa\xe7o. Relacionamentos devem ser os IDs separados por espa\xe7o."}}},auth:{tenants:"\xc1reas de Trabalho",profile:{title:"Perfil",success:"Perfil atualizado com sucesso"},createAnAccount:"Criar uma conta",rememberMe:"Lembrar-me",forgotPassword:"Esqueci minha senha",signin:"Entrar",signup:"Registrar",signout:"Sair",alreadyHaveAnAccount:"J\xe1 possui uma conta? Entre.",social:{errors:{"auth-invalid-provider":"Este email est\xe1 registrado para outro provedor.","auth-no-email":"O email associado a esta conta \xe9 privado ou n\xe3o existe."}},signinWithAnotherAccount:"Entrar com outra conta",passwordChange:{title:"Alterar Senha",success:"Senha alterada com sucesso",mustMatch:"Senhas n\xe3o conferem"},emailUnverified:{message:"Por favor, confirme seu email em <strong>{0}</strong> para continuar.",submit:"Reenviar confirma\xe7\xe3o por email"},emptyPermissions:{message:"Voc\xea ainda n\xe3o possui permiss\xf5es. Aguarde o administrador conceder seus privil\xe9gios."},passwordResetEmail:{message:"Enviar email de redefini\xe7\xe3o de senha",error:"Email n\xe3o encontrado"},passwordReset:{message:"Alterar senha"},emailAddressVerificationEmail:{error:"Email n\xe3o encontrado"},verificationEmailSuccess:"Verifica\xe7\xe3o de email enviada com sucesso",passwordResetEmailSuccess:"Email de redefini\xe7\xe3o de senha enviado com sucesso",passwordResetSuccess:"Senha alterada com sucesso",verifyEmail:{success:"Email verificado com sucesso",message:"Aguarde um momento, seu email est\xe1 sendo verificado..."}},tenant:{name:"tenant",label:"\xc1rea de Trabalho",menu:"\xc1reas de Trabalho",list:{menu:"\xc1reas de Trabalho",title:"\xc1reas de Trabalho"},create:{button:"Criar \xc1rea de Trabalho",success:"\xc1rea de Trabalho salva com sucesso"},update:{success:"\xc1rea de Trabalho salva com sucesso"},destroy:{success:"\xc1rea de Trabalho deletada com sucesso"},destroyAll:{success:"\xc1rea(s) de Trabalho deletadas com sucesso"},edit:{title:"Editar \xc1rea de Trabalho"},fields:{id:"Id",name:"Nome",tenantName:"Nome da \xc1rea de Trabalho",tenantId:"\xc1rea de Trabalho",tenantUrl:"URL da \xc1rea de Trabalho",plan:"Plano"},enumerators:{},new:{title:"Nova \xc1rea de Trabalho"},invitation:{view:"Ver Convites",invited:"Convidado",accept:"Aceitar Convite",decline:"Recusar Convite",declined:"Convite recusado com sucesso",acceptWrongEmail:"Aceitar Convite Com Este Email"},select:"Selecionar \xc1rea de Trabalho",url:{exists:"Esta URL de \xe1rea de trabalho j\xe1 est\xe1 em uso."}},plan:{menu:"Planos",title:"Planos",free:{label:"Gratuito",price:"$0"},growth:{label:"Growth",price:"$10"},enterprise:{label:"Enterprise",price:"$50"},pricingPeriod:"/m\xeas",current:"Plano Atual",subscribe:"Assinar",manage:"Gerenciar Assinatura",somethingWrong:"H\xe1 algo errado com sua assinatura. Por favor clique em Gerenciar Assinatura para mais informa\xe7\xf5es.",cancelAtPeriodEnd:"O plano ser\xe1 cancelado no fim do per\xedodo.",notPlanUser:"Esta assinatura n\xe3o \xe9 controlada por voc\xea."},roles:{admin:{label:"Propriet\xe1rio",description:"Acesso completo a todos os recursos"},custom:{label:"Perfil Customizado",description:"Acesso customizado aos recursos"}},user:{invite:"Convidar",title:"Usu\xe1rios",menu:"Usu\xe1rios",fields:{id:"Id",avatars:"Avatar",email:"Email",emails:"Email(s)",fullName:"Nome",firstName:"Nome",lastName:"Sobrenome",status:"Estado",phoneNumber:"Telefone",role:"Perfil",createdAt:"Criado em",updatedAt:"Atualizado em",roleUser:"Perfil/Usu\xe1rio",roles:"Perfis",createdAtRange:"Criado em",password:"Senha",rememberMe:"Lembrar-me",oldPassword:"Senha Antiga",newPassword:"Nova Senha",newPasswordConfirmation:"Confirma\xe7\xe3o da Nova Senha"},validations:{email:"Email ${value} \xe9 inv\xe1lido"},disable:"Desabilitar",enable:"Habilitar",doEnableSuccess:"Usu\xe1rio habilitado com sucesso",doDisableSuccess:"Usu\xe1rio desabilitado com sucesso",doDisableAllSuccess:"Usu\xe1rio(s) desabilitado(s) com sucesso",doEnableAllSuccess:"Usu\xe1rio(s) habilidatos com sucesso",doAddSuccess:"Usu\xe1rio(s) salvos com sucesso",doUpdateSuccess:"Usu\xe1rio salvo com sucesso",status:{active:"Ativo",invited:"Convidado","empty-permissions":"Aguardando Permiss\xf5es"},exporterFileName:"usuarios_export",doDestroySuccess:"Usu\xe1rio deletado com sucesso",doDestroyAllSuccess:"Usu\xe1rio(s) deletados com sucesso",edit:{title:"Editar usu\xe1rio"},new:{title:"Novo(s) Usu\xe1rio(s)",titleModal:"Novo Usu\xe1rio",emailsHint:"Separe m\xfaltiplos endere\xe7os de e-mail usando a v\xedrgula."},view:{title:"Visualizar Usu\xe1rio",activity:"Atividades"},importer:{title:"Importar Usu\xe1rios",fileName:"usuarios_template_importacao",hint:"Arquivos/Imagens devem ser as URLs dos arquivos, separados por espa\xe7o. Relacionamentos devem ser os IDs separados por espa\xe7o."},errors:{userAlreadyExists:"Usu\xe1rio com este email j\xe1 existe",userNotFound:"Usu\xe1rio n\xe3o encontrado",disablingHimself:"Voc\xea n\xe3o pode desativar-se",revokingOwnPermission:"Voc\xea n\xe3o pode revogar sua pr\xf3pria permiss\xe3o de propriet\xe1rio"}},auditLog:{menu:"Registros de Auditoria",title:"Registros de Auditoria",exporterFileName:"registros_autoria_exportados",entityNamesHint:"Separe m\xfaltiplas entidades por v\xedrgula",fields:{id:"Id",timestampRange:"Per\xedodo",entityName:"Entidade",entityNames:"Entidades",entityId:"ID da Entidade",action:"A\xe7\xe3o",values:"Valores",timestamp:"Data",createdByEmail:"Email do Usu\xe1rio"}},settings:{title:"Configura\xe7\xf5es",menu:"Configura\xe7\xf5es",save:{success:"Configura\xe7\xf5es salvas com sucesso. A p\xe1gina ir\xe1 recarregar em {0} para que as altera\xe7\xf5es tenham efeito."},fields:{theme:"Tema",logos:"Logo",backgroundImages:"Papel de Parede"},colors:{default:"Padr\xe3o",cyan:"Ciano","geek-blue":"Azul escuro",gold:"Ouro",lime:"Lim\xe3o",magenta:"Magenta",orange:"Laranja","polar-green":"Verde polar",purple:"Roxo",red:"Vermelho",volcano:"V\xfalc\xe3o",yellow:"Amarelo"}},dashboard:{menu:"Dashboard",message:"Esta p\xe1gina usa dados falsos apenas para fins de demonstra\xe7\xe3o. Voc\xea pode edit\xe1-la em frontend/view/dashboard/DashboardPage.ts.",charts:{day:"Dia",red:"Vermelho",green:"Verde",yellow:"Amarelho",grey:"Cinza",blue:"Azul",orange:"Laranja",months:{1:"Janeiro",2:"Fevereiro",3:"Mar\xe7o",4:"Abril",5:"Maio",6:"Junho",7:"Julho"},eating:"Comendo",drinking:"Bebendo",sleeping:"Dormindo",designing:"Projetando",coding:"Codificando",cycling:"Pedalando",running:"Correndo",customer:"Cliente"}},errors:{backToHome:"Voltar ao dashboard",403:"Desculpe, voc\xea n\xe3o tem acesso a esta p\xe1gina",404:"Desculpe, a p\xe1gina que voc\xea visitou n\xe3o existe",500:"Desculpe, o servidor est\xe1 relatando um erro",429:"Muitas requisi\xe7\xf5es. Por favor, tente novamente mais tarde.",forbidden:{message:"Acesso negado"},validation:{message:"Ocorreu um erro"},defaultErrorMessage:"Ops, ocorreu um erro"},preview:{error:"Desculpe, esta opera\xe7\xe3o n\xe3o \xe9 permitida em modo de demonstra\xe7\xe3o."},validation:{mixed:{default:"${path} \xe9 inv\xe1lido",required:"${path} \xe9 obrigat\xf3rio",oneOf:"${path} deve ser um dos seguintes valores: ${values}",notOneOf:"${path} n\xe3o deve ser um dos seguintes valores: ${values}",notType:function(e){var a=e.path,s=e.type;e.value,e.originalValue;return"".concat(a," deve ser um ").concat(s)}},string:{length:"${path} deve possuir ${length} caracteres",min:"${path} deve possuir ao menos ${min} caracteres",max:"${path} deve possui no m\xe1ximo ${max} caracteres",matches:'${path} deve respeitar o padr\xe3o: "${regex}"',email:"${path} deve ser um email v\xe1lido",url:"${path} deve ser uma URL v\xe1lida",trim:"${path} deve ser uma palavra sem espa\xe7os em branco",lowercase:"${path} deve ser min\xfasculo",uppercase:"${path} deve ser mai\xfasculo",selected:"${path} deve ser selecionado"},number:{min:"${path} deve ser maior ou igual a ${min}",max:"${path} deve ser menor ou igual a ${max}",lessThan:"${path} deve ser menor que ${less}",moreThan:"${path} deve ser maior que ${more}",notEqual:"${path} n\xe3o deve ser igual a ${notEqual}",positive:"${path} deve ser um n\xfamero positivo",negative:"${path} deve ser um n\xfamero negativo",integer:"${path} deve ser um inteiro"},date:{min:"${path} deve ser posterior a ${min}",max:"${path} deve ser mais cedo do que ${max}"},boolean:{},object:{noUnknown:"${path} n\xe3o pode ter atributos n\xe3o especificados no formato do objeto"},array:{min:function(e){var a=e.min,s=e.path;return 1===a?"".concat(s," \xe9 obrigat\xf3rio"):"'".concat(s," deve possuir ao menos ").concat(a," itens")},max:"${path} deve possuir no m\xe1ximo ${max} itens"}},fileUploader:{upload:"Upload",image:"Voc\xea deve fazer upload de uma imagem",size:"O arquivo \xe9 muito grande. O tamanho m\xe1ximo permitido \xe9 {0}",formats:"Formato inv\xe1lido. Deve ser um destes: {0}."},importer:{line:"Linha",status:"Estado",pending:"Pendente",imported:"Importado",error:"Erro",total:"{0} importado, {1} pendente e {2} com erro",importedMessage:"Processados {0} de {1}.",noNavigateAwayMessage:"N\xe3o saia desta p\xe1gina ou a importa\xe7\xe3o ser\xe1 interrompida.",completed:{success:"Importa\xe7\xe3o conclu\xedda. Todas as linhas foram importadas com sucesso.",someErrors:"O processamento foi conclu\xeddo, mas algumas linhas n\xe3o puderam ser importadas.",allErrors:"Importa\xe7\xe3o falhou. N\xe3o h\xe1 linhas v\xe1lidas."},form:{downloadTemplate:"Baixe o modelo",hint:"Clique ou arraste o arquivo para esta \xe1rea para continuar."},list:{discardConfirm:"Voc\xea tem certeza? Dados n\xe3o importados ser\xe3o perdidos."},errors:{invalidFileEmpty:"O arquivo est\xe1 vazio",invalidFileExcel:"Apenas arquivos Excel (.xlsx) s\xe3o permitidos",invalidFileUpload:"Arquivo inv\xe1lido. Verifique se voc\xea est\xe1 usando a \xfaltima vers\xe3o do modelo.",importHashRequired:"Hash de importa\xe7\xe3o \xe9 necess\xe1rio",importHashExistent:"Dados j\xe1 foram importados"}},autocomplete:{loading:"Carregando..."},imagesViewer:{noImage:"Sem imagem"}}}}]);