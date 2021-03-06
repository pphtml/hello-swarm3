package org.superbiz.server;

import org.jboss.shrinkwrap.api.ShrinkWrap;
import org.jboss.shrinkwrap.api.asset.ClassLoaderAsset;
import org.jboss.shrinkwrap.api.asset.EmptyAsset;
import org.wildfly.swarm.Swarm;
import org.wildfly.swarm.datasources.DatasourcesFraction;
import org.wildfly.swarm.jaxrs.JAXRSArchive;
import org.wildfly.swarm.jpa.postgresql.PostgreSQLJPAFraction;
import org.wildfly.swarm.transactions.TransactionsFraction;

public class MySwarmServer {
    // https://github.com/kissaten/wildfly-swarm-jpa-jaxrs/blob/master/src/main/java/com/example/Main.java

    public static final String DEFAULT_PORT = "8080";

    public static void main(String[] args) throws Exception {
        System.getProperties().setProperty("java.net.preferIPv4Stack", "true");
        System.getProperties().setProperty("swarm.http.port", getServerPort());
        // -Dswarm.logging=DEBUG

        Swarm container = new Swarm();

        // container.fraction(TransactionsFraction.createDefaultFraction());

        container.fraction(new DatasourcesFraction()
                .jdbcDriver("postgresql", (d) -> {
                    d.driverClassName("org.postgresql.Driver");
                    d.xaDatasourceClass("org.postgresql.xa.PGXADataSource");
                    d.driverModuleName("org.postgresql");
                })
                .dataSource("ExampleDS", (ds) -> {
                    ds.driverName("postgresql");
                    ds.connectionUrl(getJdbcDatabaseUrl());
                })
        );

        container.start();

        JAXRSArchive archive = ShrinkWrap.create(JAXRSArchive.class)
                .addPackages( true, "org.superbiz")
                .addAsWebInfResource(EmptyAsset.INSTANCE, "beans.xml")
                //.addAsWebInfResource(new ClassLoaderAsset("META-INF/persistence.xml", MySwarmServer.class.getClassLoader()), "classes/META-INF/persistence.xml")
                .addAsWebInfResource(()->MySwarmServer.class.getResourceAsStream("/META-INF/persistence.xml"), "classes/META-INF/persistence.xml")
                .staticContent("static");
        container.deploy(archive);
    }

    private static String getServerPort() {
        String port = System.getenv("PORT");
        return  port != null ? port : DEFAULT_PORT;
    }

    private static String getJdbcDatabaseUrl() {
        String url = System.getProperty("JDBC_DATABASE_URL");
        if (url == null) {
            url = System.getenv("JDBC_DATABASE_URL");
        }
        if (url == null) {
            throw new RuntimeException("Environment variable or property JDBC_DATABASE_URL not set");
        }
        return url;
    }
}
