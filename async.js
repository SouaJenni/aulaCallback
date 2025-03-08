async function funcaoDemorada(){
    console.log("Iniciando calculo demorado");
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Finalizando calculo demorado");

    return 42;
}

async function executar() {
    console.log("Antes do async");
    const valor = await funcaoDemorada();
    console.log("Depois do async", valor);
}

await executar();