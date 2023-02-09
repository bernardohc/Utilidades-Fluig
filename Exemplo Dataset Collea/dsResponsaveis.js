function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
    //Criar dataset
    var ds = DatasetBuilder.newDataset();

    //cria as colunas
    ds.addColumn("Login");
    ds.addColumn("Nome");
     
    //Filtro
    //var filtroGrupo = DatasetFacetory.createConstraint("Coluna_Desejada", "Valor_Inicial", "Valor_Final", "Tipo");
    var filtroGrupo = DatasetFactory.createConstraint("colleagueGroupPK.groupId", "ResponsaveisTeste", "ResponsaveisTeste", ConstraintType.MUST );

    //Criar o datatset de grupo
    var datasetGrupo = DatasetFactory.getDataset("ColleagueGroup", null, new Array(filtroGrupo), null);

    for (i = 0; i < datasetGrupo.rowsCount ; i++){
        var colabGrupo = datasetGrupo.getValue(i, "colleagueGroupPK.colleagueId");

        var datasetColaborador = DatasetFactory.getDataset("colleague", null, null, null);
        
        for (j = 0; j < datasetColaborador.rowsCount; j++){
            var colabCol = datasetColaborador.getValue(j, "colleaguePK.colleagueId");
            var colabNome = datasetColaborador.getValue(j, "colleagueName");
            if(colabCol == colabGrupo){
                ds.addRow(new Array(colabCol, colabNome))
            }
        }
    }

    

   return ds;

}function onMobileSync(user) {

}
