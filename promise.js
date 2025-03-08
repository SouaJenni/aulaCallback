async function funcaoDemorada(){
    console.log("Iniciando calculo demorado1");
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Finalizando calculo demorado1");

    return 42;
}
async function funcaoDemorada2(){
    console.log("Iniciando calculo demorado2");
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Finalizando calculo demorado2");

    return 51;
}
async function funcaoDemorada3(){
    console.log("Iniciando calculo demorado3");
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Finalizando calculo demorado3");

    return 13;
}

async function executar() {
    console.log("Antes do async");
    const promessa1 = funcaoDemorada();
    const promessa2 = funcaoDemorada2();
    const promessa3 = funcaoDemorada3();
    console.log("Depois do async");
    console.log("Resolvendo promessas");

    const resultado = await promessa1;
    console.log("Promessa 1 resolvida: ", resultado);

    promessa2.then((valor) => {
        console.log("Promessa 2 resolvida: ", valor);
    });

    const [resultado1, resultado2, resultado3] = await Promise.all([promessa1, promessa2, promessa3]);
    console.log("Promessa 1 resolvida: ", resultado1);
    console.log("Promessa 2 resolvida: ", resultado2);
    console.log("Promessa 3 resolvida: ", resultado3);
}
await executar();