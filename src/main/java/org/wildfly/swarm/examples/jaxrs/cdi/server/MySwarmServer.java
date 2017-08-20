package org.wildfly.swarm.examples.jaxrs.cdi.server;

import org.jboss.shrinkwrap.api.Archive;
import org.wildfly.swarm.Swarm;
import org.wildfly.swarm.datasources.DatasourcesFraction;

public class MySwarmServer {

    public static final String DEFAULT_PORT = "8080";

    public static void main(String[] args) throws Exception {
        System.getProperties().setProperty("java.net.preferIPv4Stack", "true");
        System.getProperties().setProperty("swarm.http.port", getServerPort());

        Swarm container = new Swarm();

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

        Archive<?> defaultDeployment = container.createDefaultDeployment();
        container.start();
        container.deploy(defaultDeployment);
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
