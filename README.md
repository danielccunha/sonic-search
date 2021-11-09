# Sonic Search

Simple search application developed with [Sonic](https://github.com/valeriansaliou/sonic).

## Commands

Run Sonic using Docker:

```sh
$ docker container run -p 1491:1491 -v "$(pwd)/config.cfg:/etc/sonic.cfg" -v sonic-search-data:/var/lib/sonic/store/ -d --name sonic-search valeriansaliou/sonic:v1.3.1
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
